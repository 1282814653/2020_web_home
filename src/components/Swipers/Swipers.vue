<template>
  <div class="swipers">
    <swiper class="swipers-main" ref="mySwiper" :options="swiperOptions">
      <swiper-slide class="swipers-item" v-for="item in list" :key="item.id">
        <img class="swipers-img" :src="item.img" alt="" />
      </swiper-slide>
      <div class="swiper-button-prev" slot="button-prev" @click="next"></div>
      <div class="swiper-button-next" slot="button-next" @click="prev"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: "Swipers",
  // 组件
  components: {},
  data() {
    return {
      list: [
        {
          id: 1,
          img: require("@/assets/images/home/s1.jpg"),
        },
        {
          id: 2,
          img: require("@/assets/images/home/s2.jpg"),
        },
        {
          id: 3,
          img: require("@/assets/images/home/s3.jpg"),
        },
        {
          id: 4,
          img: require("@/assets/images/home/s4.jpg"),
        },
        {
          id: 5,
          img: require("@/assets/images/home/s5.jpg"),
        },
        {
          id: 6,
          img: require("@/assets/images/home/s6.jpg"),
        },
      ],
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          // clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        slidesPerView: 3,
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        autoplay: {
          // delay: 2500,
          disableOnInteraction: false,
        },
      },
    };
  },
  // 事件
  methods: {
    prev() {
      this.swiper.slidePrev();
    },
    next() {
      this.swiper.slideNext();
    },
  },
  // 周期一
  created() {},
  // 周期二
  mounted() {},
  // 计算属性
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper;
    },
  },
};
</script>

<style scoped lang="scss">
.swipers {
  width: 100%;
  .swiper-container {
    width: 600px;
    height: 300px;
  }
  .swipers-main {
    width: 1200px;
    height: 300px;
    margin: 0px auto 10px;
    background-color: #fdfdfd;
    .swipers-item {
      transition: 300ms;
      transform: scale(0.8);
      opacity: 0.3;
      .swipers-img {
        // width: 350px;
        width: 100%;
        height: 100%;
      }
    }
    .swiper-slide-active,
    .swiper-slide-duplicate-active {
      transform: scale(1);
      opacity: 1;
    }
  }
}
</style>
