import Vue from "vue";
import Router from "vue-router";
import Pizza from "./views/Pizza.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "pizza",
      component: Pizza
    },
    {
      path: "/paste",
      name: "paste",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "./views/Paste.vue")
    }
  ]
});
