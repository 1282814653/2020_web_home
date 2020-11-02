import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/home/index.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Homes",
    redirect: "/home",
    component: Home,
  },
  {
    path: "/index",
    redirect: "/home",
    component: Home,
  },
  // 我的家 Home 首页
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  // 诗 Poem 页面
  {
    path: "/poem",
    name: "Poem",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/poem/index.vue"),
  },
  // 远方 Distance
  {
    path: "/distance",
    name: "Distance",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/distance/index.vue"),
  },
  // 其他页面
  {
    path: "/other",
    name: "Other",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/other/index.vue"),
  },
  // 地址页面
  {
    path: "/address",
    name: "Address",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/address/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
