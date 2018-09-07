import store from "../store";
let routers = [
  {
    path: "/",
    component: () => import("views/home.vue"),
    beforeEnter: (to, from, next) => {
      let localToken = localStorage.getItem("token");
      if (localToken && localToken != "undefined") {
        store.dispatch("setUser", JSON.parse(localToken));
        store.dispatch("setmenus").then(() => {
          next();
        });
      } else {
        next({
          path: "/login",
          query: { redirect: to.fullPath }
        });
      }
    },
    alias: "/home",
    redirect: "/welcome",
    children: [
      {
        path: "/demo/:id",
        name: "orderplay",
        component: () => import("views/purchase/orderplay.vue"),
        beforeEnter: (to, from, next) => {
          localStorage.setItem("paymentAddress", from.name);
          next();
        }
      }
    ]
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("views/user/login.vue")
  },
  {
    path: "*",
    redirect: "/"
  }
];
const router = new VueRouter({
  mode: "history",
  routes: routers
});
export default router;
