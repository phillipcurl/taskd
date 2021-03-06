module.exports = {
  fetchUserOnLogin: true,
  resetOnError: false,
  rewriteRedirects: true,
  watchLoggedIn: true,
  namespace: 'auth',
  scopeKey: 'scope',
  endpoints: {
    graphqlMutation: {
      url: 'http://localhost:4000',
      method: 'post'
    },
    graphqlQuery: {
      url: 'http://localhost:4000',
      method: 'get'
    },
    login: {
      url: '/api/auth/login',
      method: 'post',
      propertyName: 'token'
    },
    logout: {
      url: '/api/auth/logout',
      method: 'post'
    },
    user: {
      url: '/api/auth/user',
      method: 'get',
      propertyName: 'user'
    }
  },
  redirect: {
    login: '/login',
    home: '/home'
  },
  token: {
    type: 'Bearer',
    name: 'token'
  },
  cookie: {
    name: 'token',
    options: {
      path: '/'
    }
  }
};