import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import knjiga from "../views/knjiga.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/knjiga/:id",
    name: "knjiga",
    component: knjiga,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
