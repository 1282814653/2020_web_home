<template>
  <div id="app">
    <div class="app-header">
      <headerBar></headerBar>
    </div>
    <div class="app-main">
      <router-view />
    </div>
    <div class="app-footer">
      <footerBar></footerBar>
    </div>
  </div>
</template>

<script>
import headerBar from "./components/HeaderBar/HeaderBar";
import footerBar from "./components/FooterBar/FooterBar";
export default {
  components: {
    headerBar,
    footerBar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// #nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
