<template>
  <div class="nav">
    <div class="nav-insert">
      <div class="nav-item">
        <img class="nav-img" :src="logo" alt="" />
      </div>
      <div class="nav-list">
        <router-link class="nav-nav" to="/home">家</router-link>
        <router-link class="nav-nav" to="/poem">诗</router-link>
        <router-link class="nav-nav" to="/distance">远方</router-link>
        <router-link class="nav-nav" to="/address">地址</router-link>
        <!-- <router-link class="nav-nav" to="/myInfo">其他</router-link> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      logo: require("@/assets/images/home/logo.png"),
    };
  },
  // 创建
  created() {},
  // 生命周期钩子函数
  mounted() {},
  // 事件
  methods: {},
  // 监听
  computed: {},
};
</script>

<style scoped lang="scss">
// 导航栏
.nav {
  background-color: #f2f2f2;
  width: 100%;
  .nav-insert {
    display: flex;
    height: 60px;
    width: 1200px;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    z-index: 10;
    .nav-item {
      width: 120px;
      height: 60px;
    }
    .nav-img {
      width: 100%;
      height: 100%;
    }
    .nav-list {
      display: flex;
      align-items: center;
      background-size: 100% 100%;
      .nav-nav {
        display: block;
        height: 60px;
        width: 90px;
        line-height: 60px;
        color: #666;
        border-bottom: 2px solid transparent;
        text-align: center;
        text-decoration: none;
        &.router-link-exact-active {
          font-weight: bold;
          color: black;
          border-bottom: 2px solid purple;
        }
      }
    }
  }
}
</style>