<template>
  <div class="distance">
    <ul class="distance-main" v-for="item in list" :key="item.id">
      <!-- <h1 class="distance-main-title">{{ item.title }} ——{{ item.name }}</h1> -->
      <h1
        :class="`${
          item.id == 11
            ? 'distance-main-title-one'
            : `${
                item.id == 22
                  ? 'distance-main-title-two'
                  : `${
                      item.id == 33
                        ? 'distance-main-title-three'
                        : `${
                            item.id == 44
                              ? 'distance-main-title-four'
                              : `${
                                  item.id == 55
                                    ? 'distance-main-title-five'
                                    : `${
                                        item.id == 66
                                          ? 'distance-main-title-six'
                                          : `distance-main-title`
                                      }`
                                }`
                          }`
                    }`
              }`
        }`"
      >
        {{ item.title }} ——{{ item.name }}
      </h1>
      <li class="distance-main-lis" v-for="items in item.data" :key="items.id">
        <img class="main-lis-imgs" :src="items.img" alt="" />
        <div class="main-lis-info">
          <p class="lis-info-title">{{ items.title }}</p>
          <p class="lis-info-date">{{ items.date }}</p>
          <p class="lis-info-weather">{{ items.weather }}</p>
          <p class="lis-info-author">{{ items.author }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Distance.vue",
  props: ["list"],
  // 组件
  components: {},
  data() {
    return {};
  },
  // 事件
  methods: {},
  // 周期一
  created() {},
  // 周期二
  mounted() {},
  // 计算属性
  computed: {},
};
</script>

<style scoped lang="scss">
.distance {
  width: 100%;
  height: 100%;
  .distance-main {
    width: 1200px;
    display: flex;
    flex-wrap: wrap;
    margin: 0 auto;
    .distance-main-title,
    .distance-main-title-one,
    .distance-main-title-two,
    .distance-main-title-three,
    .distance-main-title-four,
    .distance-main-title-five,
    .distance-main-title-six {
      width: 1200px;
      text-align: center;
      font-size: 32px;
      background-color: orange;
      padding: 10px 0;
      margin: 15px auto;
    }
    .distance-main-title-one {
      background-color: rgb(247, 128, 31);
    }
    .distance-main-title-two {
      background-color: rgb(247, 244, 88);
    }
    .distance-main-title-three {
      background-color: rgb(63, 231, 47);
    }
    .distance-main-title-four {
      background-color: rgb(31, 185, 231);
    }
    .distance-main-title-five {
      background-color: rgb(173, 70, 221);
    }
    .distance-main-title-six {
      background-color: rgb(206, 69, 165);
    }
    .distance-main-lis {
      position: relative;
      width: 358px;
      height: 238px;
      margin: 18px;
      .main-lis-imgs {
        width: 100%;
        height: 100%;
        border: 3px dashed rgb(248, 230, 197);
      }
      .main-lis-info {
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        text-align: center;
        display: none;
        .lis-info-title,
        .lis-info-date,
        .lis-info-weather,
        .lis-info-author {
          margin-top: 15px;
        }
      }
      &:hover .main-lis-info,
      &:hover .main-lis-imgs {
        display: block;
        border: 3px dashed rgb(238, 210, 52);
        color: orange;
        cursor: pointer;
      }
    }
  }
}
</style>
