const state = {
  breadcrumb: ""
};

const getters = {
  getBreadcrumb: state => {
    return state.breadcrumb;
  }
};

const mutations = {
  BREADCRUMB: (state, data) => {
    Vue.set(state, "breadcrumb", data);
  }
};
const actions = {
  setBreadcrumb: ({ commit }, params) => {
    commit("BREADCRUMB", params);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
