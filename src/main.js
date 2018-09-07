import app from "./app";
import router from "./router";
import "assets/font/iconfont.js";
import "assets/font/iconfont.css";
import store from "./store";
import "./components/services/filter";
new Vue({
  router,
  store,
  render: h => h(app)
}).$mount("#app");
