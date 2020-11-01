<template>
  <div class="story">
    <h1 class="story-title">家乡的故事</h1>
    <ul class="story-uls">
      <li
        :class="`${
          item.reverse == false ? 'story-uls-lis' : 'story-uls-lis-reverse'
        }`"
        v-for="item in list.slice(0, 4)"
        :key="item.id"
      >
        <img class="uls-lis-img" :src="item.img" alt="" />
        <div class="uls-lis-info">
          <p class="lis-info-title">{{ item.title }}</p>
          <p class="lis-info-date">{{ item.date }}</p>
          <p class="lis-info-author">{{ item.author }}</p>
          <p class="lis-info-section">{{ item.section }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Story",
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
.story {
  width: 1200px;
  margin: 0 auto;
  .story-title {
    font-size: 32px;
    text-align: center;
    padding: 10px 0;
    background-color: orange;
  }
  .story-uls {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;

    .story-uls-lis,
    .story-uls-lis-reverse {
      width: 540px;
      height: 240px;
      display: flex;
      border: 2px dashed #353535;
      margin-top: 15px;
      .uls-lis-img {
        width: 320px;
        padding: 10px;
        box-sizing: border-box;
      }
      .uls-lis-info {
        width: 220px;
        padding: 10px;
        box-sizing: border-box;
        .lis-info-title,
        .lis-info-date,
        .lis-info-author {
          text-align: center;
          line-height: 24px;
        }
        .lis-info-date {
          font-size: 14px;
        }
        .lis-info-section{
            text-indent: 2em;
            font-size: 14px;
        }
      }
      &:hover{
         border-color: orange; 
         cursor: pointer;
      }
    }
    .story-uls-lis-reverse {
      flex-direction: row-reverse;
    }
  }
}
</style>
