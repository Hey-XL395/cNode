import Vue from "vue";
import Router from "vue-router";
import Home from "./views/HomePage.vue";
// import Details from "./views/Details.vue"
// components可以这样写
Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/Details",
      name: "Details",
      component: () =>
        import("./views/Details.vue")
    },
    {
      path: "/Land",
      name: "Land",
      component: () =>
          import("./views/Land.vue")
    }
  ]
});
