import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      alias: "/clients",
      name: "client",
      component: () => import("./components/Clients")
    },
    {
      path: "/clients/:id",
      name: "client-details",
      component: () => import("./components/Client")
    },
    {
      path: "/add",
      name: "add",
      component: () => import("./components/AddClient")
    }
  ]
});