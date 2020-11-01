<template>
  <div class="poem">
    <ul class="poem-main" v-for="item in list" :key="item.id">
      <h1
        :class="`${
          item.id == 11
            ? 'poem-main-title-one'
            : `${
                item.id == 22
                  ? 'poem-main-title-two'
                  : `${
                      item.id == 33
                        ? 'poem-main-title-three'
                        : `${
                            item.id == 44
                              ? 'poem-main-title-four'
                              : 'poem-main-title'
                          }`
                    }`
              }`
        }`"
      >
        {{ item.title }}
      </h1>
      <li
        :class="`${
          items.reverse == false ? 'poem-main-lis' : 'poem-main-lis-reverse'
        }`"
        v-for="items in item.data"
        :key="items.id"
      >
        <img class="main-lis-img" :src="items.img" alt="" />
        <p class="main-lis-introduce">{{ items.introduce }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Poem",
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
.poem {
  width: 100%;
  height: 100%;
  .poem-main {
    width: 1200px;
    margin: 20px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .poem-main-title,
    .poem-main-title-one,
    .poem-main-title-two,
    .poem-main-title-three,
    .poem-main-title-four {
      width: 1200px;
      background-color: orange;
      font-size: 32px;
      text-align: center;
      padding: 10px 0;
    }
    .poem-main-title-one {
      background-color: rgb(104, 241, 50);
    }
    .poem-main-title-two {
      background-color: rgb(5, 199, 37);
    }
    .poem-main-title-three {
      background-color: rgb(250, 201, 68);
    }
    .poem-main-title-four {
      background-color: rgb(198, 242, 253);
    }
    .poem-main-lis,
    .poem-main-lis-reverse {
      width: 580px;
      height: 240px;
      display: flex;
      flex-wrap: wrap;
      border: 2px dashed rgb(188, 219, 245);
      margin-top: 20px;
      box-sizing: border-box;
      padding: 10px;
      &:hover {
        border-color: orange;
        cursor: pointer;
      }
    }
    .poem-main-lis-reverse {
      flex-direction: row-reverse;
    }
    .main-lis-img {
      width: 300px;
    }
    .main-lis-introduce {
      width: 240px;
      margin: 8px;
      text-indent: 2em;
    }
  }
}
</style>
