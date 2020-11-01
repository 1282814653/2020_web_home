<template>
  <div class="distance">
    <div>
      <distanceCom :list="list"></distanceCom>
    </div>
  </div>
</template>

<script>
import distanceCom from "../../components/Distance/Distance";
export default {
  name: "Distance",
  // 组件
  components: {
    distanceCom,
  },
  data() {
    return {
      list: [
        {
          id: 11,
          title: "上海",
          name: "东方明珠",
          path: "",
          data: [
            {
              id: 1,
              img: require("@/assets/images/distance/dfmz/dfmz1.jpg"),
              title: "你好,东方明珠",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 2,
              img: require("@/assets/images/distance/dfmz/dfmz2.jpg"),
              title: "你好,东方明珠",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 3,
              img: require("@/assets/images/distance/dfmz/dfmz3.jpg"),
              title: "你好,东方明珠",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 4,
              img: require("@/assets/images/distance/dfmz/dfmz4.jpg"),
              title: "你好,东方明珠",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 5,
              img: require("@/assets/images/distance/dfmz/dfmz5.jpg"),
              title: "你好,东方明珠",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 6,
              img: require("@/assets/images/distance/dfmz/dfmz6.jpg"),
              title: "你好,东方明珠",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
          ],
        },
        {
          id: 22,
          title: "南京",
          name: "长江",
          path: "",
          data: [
            {
              id: 1,
              img: require("@/assets/images/distance/njcj/njcj1.jpg"),
              title: "你好,东方明珠",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 2,
              img: require("@/assets/images/distance/njcj/njcj2.jpg"),
              title: "你好,东方明珠",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 3,
              img: require("@/assets/images/distance/njcj/njcj3.jpg"),
              title: "你好,东方明珠",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 4,
              img: require("@/assets/images/distance/njcj/njcj4.jpg"),
              title: "你好,东方明珠",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 5,
              img: require("@/assets/images/distance/njcj/njcj5.jpg"),
              title: "你好,东方明珠",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 6,
              img: require("@/assets/images/distance/njcj/njcj6.jpg"),
              title: "你好,东方明珠",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
          ],
        },
        {
          id: 33,
          title: "郑州",
          name: "中原福塔",
          path: "",
          data: [
            {
              id: 1,
              img: require("@/assets/images/distance/zyft/zyft1.jpg"),
              title: "你好,中原福塔",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 2,
              img: require("@/assets/images/distance/zyft/zyft2.jpg"),
              title: "你好,中原福塔",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 3,
              img: require("@/assets/images/distance/zyft/zyft3.jpg"),
              title: "你好,中原福塔",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 4,
              img: require("@/assets/images/distance/zyft/zyft4.jpg"),
              title: "你好,中原福塔",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 5,
              img: require("@/assets/images/distance/zyft/zyft5.jpg"),
              title: "你好,中原福塔",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 6,
              img: require("@/assets/images/distance/zyft/zyft6.jpg"),
              title: "你好,中原福塔",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
          ],
        },
        {
          id: 44,
          title: "驻马店",
          name: "金顶山",
          path: "",
          data: [
            {
              id: 1,
              img: require("@/assets/images/distance/jds/jds1.jpg"),
              title: "你好,金顶山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 2,
              img: require("@/assets/images/distance/jds/jds2.jpg"),
              title: "你好,金顶山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 3,
              img: require("@/assets/images/distance/jds/jds3.jpg"),
              title: "你好,金顶山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 4,
              img: require("@/assets/images/distance/jds/jds4.jpg"),
              title: "你好,金顶山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 5,
              img: require("@/assets/images/distance/jds/jds5.jpg"),
              title: "你好,金顶山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
          ],
        },
        {
          id: 55,
          title: "驻马店",
          name: "老乐山",
          path: "",
          data: [
            {
              id: 1,
              img: require("@/assets/images/distance/lls/lls1.jpg"),
              title: "你好,老乐山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 2,
              img: require("@/assets/images/distance/lls/lls2.jpg"),
              title: "你好,老乐山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 3,
              img: require("@/assets/images/distance/lls/lls3.jpg"),
              title: "你好,老乐山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 4,
              img: require("@/assets/images/distance/lls/lls4.jpg"),
              title: "你好,老乐山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
          ],
        },
        {
          id: 66,
          title: "舞钢",
          name: "二郎山",
          path: "",
          data: [
            {
              id: 1,
              img: require("@/assets/images/distance/els/els1.webp"),
              title: "你好,二郎山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 2,
              img: require("@/assets/images/distance/els/els2.webp"),
              title: "你好,二郎山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 3,
              img: require("@/assets/images/distance/els/els3.webp"),
              title: "你好,二郎山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 4,
              img: require("@/assets/images/distance/els/els4.webp"),
              title: "你好,二郎山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 5,
              img: require("@/assets/images/distance/els/els5.webp"),
              title: "你好,二郎山",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
          ],
        },
      ],
    };
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
</style>
