/**
 * Created by banlan002 on 2017/7/21.
 */
import mutations from "./mutations";
import breadcrumb from "./module/breadcrumb";
const state = {
};
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  modules: {
    breadcrumb
  }
});
