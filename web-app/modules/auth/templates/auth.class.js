import Cookies from 'js-cookie';
import { parse as parseCookie } from 'cookie';
import { routeOption } from './auth.utilities';
import getProp from 'dotprop';
import Vue from 'vue';
import gql from 'graphql-tag';

const RELATIVE_URL_REGEX = /^\/[a-zA-Z0-9@\-%_~][\/a-zA-Z0-9@\-%_~]{1,200}$/;

export const loginMutaion = gql`
  mutation($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

export const signupMutation = gql`
  mutation($email: String!, $password: String!) {
    signup(email: $email, password: $password) {
      token
      user {
        id
        email
      }
    }
  }
`;

export default class Auth {
  constructor(ctx, options) {
    this.ctx = ctx;
    this.app = ctx.app;
    this.options = options;
  }

  init() {
    // Error listeners
    this._errorListeners = [];

    // Keep token out of the store for security reasons
    Vue.set(this, 'token', null);

    // Register vuex store
    this._registerVuexStore();

    // Reset on error
    if (this.options.resetOnError) {
      this._resetOnError();
    }

    // Watch for loggedIn changes only in client side
    if (this.options.watchLoggedIn && process.browser) {
      this._watchLoggedIn();
    }

    // Sync token
    this.syncToken();

    // Fetch user if is not available
    return !this.state.user && this.options.fetchUserOnLogin
      ? this.fetchUser()
      : Promise.resolve();
  }

  _registerVuexStore() {
    const authModule = {
      namespaced: true,
      state: () => ({
        user: null,
        loggedIn: false
      }),
      mutations: {
        SET(state, payload) {
          Vue.set(state, payload.key, payload.value);
        }
      }
    };

    this.$store.registerModule(this.options.namespace, authModule, {
      preserveState: Boolean(this.$store.state[this.options.namespace])
    });
  }

  _resetOnError() {
    this.onError(() => {
      this.reset();
    });
  }

  _watchLoggedIn() {
    this._loggedInWatcher =
      this._loggedInWatcher ||
      this.watchState('loggedIn', () => {
        if (routeOption(this.$route, 'auth', false)) {
          return;
        }
        this.redirect('/');
      });

    return this._loggedInWatcher;
  }

  onError(listener) {
    this._errorListeners.push(listener);
  }

  _onError() {
    for (let fn of this._errorListeners) {
      fn.apply(this, arguments);
    }
  }

  get $apollo() {
    if (!this.app.apolloProvider) {
      throw new Error('$apollo is not available');
    }
    return this.app.apolloProvider.defaultClient;
  }

  get $store() {
    return this.ctx.store;
  }

  get $route() {
    return this.ctx.route;
  }

  get $req() {
    return this.app.context.req;
  }

  get $res() {
    return this.app.context.res;
  }

  get isAPIRequest() {
    return (
      process.server &&
      this.$req.url.indexOf(this.options.endpoints.user.url) === 0
    );
  }

  get state() {
    return this.$store.state[this.options.namespace];
  }

  reset() {
    this.setState('loggedIn', false);
    this.setState('token', null);
    this.setState('user', null);

    if (this.options.cookie) {
      this.setCookie(this.options.cookie.name, null);
    }

    if (this.options.token.name) {
      this.setLocalStorage(this.options.token.name, null);
    }
  }

  setState(key, value) {
    if (key === 'token') {
      this.token = value;
      return;
    }

    this.$store.commit(this.options.namespace + '/SET', { key, value });
  }

  getState(key) {
    if (key === 'token') {
      return this.token;
    }

    return this.state[key];
  }

  watchState(key, fn) {
    return this.$store.watch(
      state => getProp(state[this.options.namespace], key),
      fn
    );
  }

  setLocalStorage(name, value) {
    if (typeof localStorage !== 'undefined') {
      if (value) {
        localStorage.setItem(name, value);
      } else {
        localStorage.removeItem(name);
      }
    }
  }

  getLocalStorage(name) {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(name);
    }
  }

  setCookie(name, value, options = {}) {
    if (!this.options.cookie || !process.browser) {
      return;
    }

    const _options = Object.assign({}, this.options.cookie.options, options);

    if (value) {
      Cookies.set(name, value, _options);
    } else {
      Cookies.remove(name, _options);
    }
  }

  getCookie(name) {
    const cookieStr = process.browser
      ? document.cookie
      : this.$req.headers.cookie;

    const cookies = parseCookie(cookieStr || '') || {};

    return cookies[name];
  }

  async login(email, password) {
    const { data } = await this.$apollo.mutate({
      mutation: loginMutaion,
      variables: {
        email,
        password
      }
    });
    const loginData = data.login;
    if (!loginData) {
      return;
    }

    // Extract and set token
    this.setToken(loginData.token);

    // Set User data
    if (this.options.fetchUserOnLogin && this.options.endpoints.user) {
      this.setState('user', loginData.user);
    }

    // Set loggedIn to true
    this.setState('loggedIn', true);
  }

  async signup(email, password) {
    const { data } = await this.$apollo.mutate({
      mutation: signupMutation,
      variables: {
        email,
        password
      }
    });
    const signupData = data.signup;
    if (!signupData) {
      return;
    }

    // Extract and set token
    this.setToken(signupData.token);

    // Set User data
    if (this.options.fetchUserOnLogin && this.options.endpoints.user) {
      this.setState('user', signupData.user);
    }

    // Set loggedIn to true
    this.setState('loggedIn', true);
  }

  async fetchUser() {
    if (this.options.token && !this.getState('token')) {
      return;
    }

    const data = await this.$apollo.query({
      query: gql`
        {
          me {
            id
            email
          }
        }
      `
    });
    const userData = data.data.me;
    if (!userData) {
      return;
    }

    this.setState('user', userData);
    this.setState('loggedIn', true);
  }

  async logout() {
    // await this._request('logout', endpoint);

    this.reset();
    this.ctx.redirect('/');
  }

  setToken(token) {
    if (!this.options.token) {
      return;
    }

    // Update local state
    this.setState('token', token);

    // Save it in cookies
    if (this.options.cookie) {
      this.setCookie(this.options.cookie.name, token);
    }

    // Save it in localSotage
    if (this.options.token.name) {
      this.setLocalStorage(this.options.token.name, token);
    }
  }

  syncToken() {
    if (!this.options.token) {
      return;
    }

    let token = this.getState('token');

    if (!token && this.options.cookie) {
      token = this.getCookie(this.options.cookie.name);
    }

    if (!token && this.options.token.name) {
      token = this.getLocalStorage(this.options.token.name);
    }

    this.setToken(token);
  }

  redirect(name) {
    let to = this.options.redirect[name];
    const from = this.$route.path;

    if (!to) {
      return;
    }

    // Apply rewrites
    if (this.options.rewriteRedirects) {
      if (name === 'login') {
        to = to + '?redirect=' + encodeURIComponent(from);
      }

      if (name === 'home' && this.$route.query.redirect) {
        // Decode
        const redirect = decodeURIComponent(this.$route.query.redirect);
        // Validate
        if (RELATIVE_URL_REGEX.test(redirect)) {
          to = redirect;
        }
      }
    }

    // Prevent infinity redirects
    if (to.split('?')[0] === from) {
      return;
    }

    this.ctx.redirect(to);
  }

  hasScope(scope) {
    const userScopes =
      this.state.user && getProp(this.state.user, this.options.scopeKey);

    if (!userScopes) {
      return;
    }

    if (Array.isArray(userScopes)) {
      return userScopes.includes(scope);
    }

    return Boolean(getProp(userScopes, scope));
  }
}
