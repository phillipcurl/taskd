import link from '~/apollo/queries/link';
import favoriteLink from '~/apollo/mutations/favoriteLink';
import deleteLink from '~/apollo/mutations/deleteLink';

export const state = () => ({
  activeLink: {}
});

export const actions = {
  async setActiveLink({ commit }, id) {
    const linkData = await this.app.apolloProvider.defaultClient.query({
      query: link,
      variables: {
        id: id
      }
    });
    // console.log('link: ', linkData);
    commit('SET_ACTIVE_LINK', linkData.data.resource);
  },
  async favoriteLink({ commit }, { id, isFavorite }) {
    const data = await this.app.apolloProvider.defaultClient.mutate({
      mutation: favoriteLink,
      variables: {
        id: id,
        isFavorite: isFavorite
      }
    });
    commit('SET_ACTIVE_LINK_ISFAVORITE', {
      id: data.data.favoriteResource.id,
      isFavorite: data.data.favoriteResource.isFavorite
    });
  },
  async deleteLink({ commit }, id) {
    const data = await this.app.apolloProvider.defaultClient.mutate({
      mutation: deleteLink,
      variables: {
        id: id
      }
    });
    commit('DELETE_ACTIVE_LINK', id);
  }
};

export const mutations = {
  SET_ACTIVE_LINK(state, value) {
    state.activeLink = value;
  },
  SET_ACTIVE_LINK_ISFAVORITE(state, { id, isFavorite }) {
    if (state.activeLink.id === id) {
      const linkCopy = Object.assign({}, state.activeLink);
      linkCopy.isFavorite = isFavorite;
      state.activeLink = linkCopy;
    }
  },
  DELETE_ACTIVE_LINK(state, id) {
    if (state.activeLink.id === id) {
      state.activeLink = {};
    }
  }
};

export const getters = {
  activeLink(state) {
    return state.activeLink;
  }
};
