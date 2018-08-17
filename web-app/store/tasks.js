import captureTask from '~/apollo/mutations/capture';

export const state = () => ({
  activeTask: {}
});

export const actions = {
  async captureTask({
    commit
  }, title) {
    console.log('the text is: ', title);
    const data = await this.app.apolloProvider.defaultClient.mutate({
      mutation: captureTask,
      variables: {
        title: title
      }
    });

    commit('SET_ACTIVE_TASK', data.data.capture);
  }
};

export const mutations = {
  SET_ACTIVE_TASK(state, value) {
    state.activeLink = value;
  }
};

export const getters = {
  activeLink(state) {
    return state.activeLink;
  }
};