import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
// 引入 初始化 css 样式
import "./assets/css/reset.css";
// 引入 百度 地图
import BaiduMap from "vue-baidu-map";
Vue.use(BaiduMap, {
  // ak 是在百度地图开发者平台申请的密钥 详见 http://lbsyun.baidu.com/apiconsole/key */
  ak: "3QCvjqimsXcedWgzoolzWNISh7Ppf5UC",
});
// 引入 swiper 轮播图
import VueAwesomeSwiper from "vue-awesome-swiper";
import "swiper/swiper-bundle.css";
import SwiperCore, { Autoplay } from "swiper";
SwiperCore.use([Autoplay]);
Vue.use(VueAwesomeSwiper);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
