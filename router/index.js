import Vue from "vue";
import VueRouter from "vue-router";
import TheMain from "../views/TheMain.vue";
import MyHome from "../views/MyHome.vue";
import MyWritings from "../views/MyWritings.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: TheMain,
    children: [
      { path: "/home", component: MyHome },
      { path: "/writings", component: MyWritings },
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;
