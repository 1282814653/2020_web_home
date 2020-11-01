<template>
  <div class="home">
    <div class="hom-swiper">
      <swiperCom></swiperCom>
    </div>
    <div class="home-top">
      <distanceCom :list="distance"></distanceCom>
    </div>
    <div class="home-main">
      <storyCom :list="story"></storyCom>
    </div>
    <div class="home-bottom">
      <infoCom></infoCom>
    </div>
  </div>
</template>

<script>
// 首页 轮播图
import swiperCom from "../../components/Swipers/Swipers";
// 家乡的 风景
import distanceCom from "../../components/Distance/Distance";
// 家乡的故事
import storyCom from "./Story/Story";
// 家乡的介绍
import infoCom from "./Info/Info";
export default {
  name: "Home",
  // 组件
  components: {
    swiperCom,
    distanceCom,
    storyCom,
    infoCom,
  },
  data() {
    return {
      story: [
        {
          id: 1,
          img: require("@/assets/images/home/lfz1.jpg"),
          title: "老房子",
          date: "1989-10-18",
          author: "文之木",
          section:
            "街上有一幢很老很老的房子，它几乎有三百年的历史，这一点，人们在它的大梁上就可以看得出来；那上面刻着郁金香和牵藤的啤酒花花纹——在这中间刻着的是它兴建的年月。",
          reverse: false,
        },
        {
          id: 2,
          img: require("@/assets/images/home/lfz2.jpg"),
          title: "老房子",
          date: "1989-10-18",
          author: "文之木",
          section:
            "街上有一幢很老很老的房子，它几乎有三百年的历史，这一点，人们在它的大梁上就可以看得出来；那上面刻着郁金香和牵藤的啤酒花花纹——在这中间刻着的是它兴建的年月。",
          reverse: true,
        },
        {
          id: 3,
          img: require("@/assets/images/home/lfz3.jpg"),
          title: "老房子",
          date: "1989-10-18",
          author: "文之木",
          section:
            "街上有一幢很老很老的房子，它几乎有三百年的历史，这一点，人们在它的大梁上就可以看得出来；那上面刻着郁金香和牵藤的啤酒花花纹——在这中间刻着的是它兴建的年月。",
          reverse: false,
        },
        {
          id: 4,
          img: require("@/assets/images/home/lfz4.jpg"),
          title: "老房子",
          date: "1989-10-18",
          author: "文之木",
          section:
            "街上有一幢很老很老的房子，它几乎有三百年的历史，这一点，人们在它的大梁上就可以看得出来；那上面刻着郁金香和牵藤的啤酒花花纹——在这中间刻着的是它兴建的年月。",
          reverse: true,
        },
        {
          id: 5,
          img: require("@/assets/images/home/lfz5.jpg"),
          title: "老房子",
          date: "1989-10-18",
          author: "文之木",
          section:
            "街上有一幢很老很老的房子，它几乎有三百年的历史，这一点，人们在它的大梁上就可以看得出来；那上面刻着郁金香和牵藤的啤酒花花纹——在这中间刻着的是它兴建的年月。",
          reverse: true,
        },
        {
          id: 6,
          img: require("@/assets/images/home/lfz6.jpg"),
          title: "老房子",
          date: "1989-10-18",
          author: "文之木",
          section:
            "街上有一幢很老很老的房子，它几乎有三百年的历史，这一点，人们在它的大梁上就可以看得出来；那上面刻着郁金香和牵藤的啤酒花花纹——在这中间刻着的是它兴建的年月。",
          reverse: true,
        },
      ],
      distance: [
        {
          id: 11,
          title: "西平",
          name: "嫘祖镇",
          path: "",
          data: [
            {
              id: 1,
              img: require("@/assets/images/home/tp1.jpg"),
              title: "你好,嫘祖镇",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 2,
              img: require("@/assets/images/home/tp2.jpg"),
              title: "你好,嫘祖镇",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 3,
              img: require("@/assets/images/home/tp3.jpg"),
              title: "你好,嫘祖镇",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            {
              id: 4,
              img: require("@/assets/images/home/tp4.jpg"),
              title: "你好,嫘祖镇",
              date: "2008-08-23",
              weather: "晴",
              author: "文木",
            },
            // {
            //   id: 5,
            //   img: require("@/assets/images/home/tp5.jpg"),
            //   title: "你好,嫘祖镇",
            //   date: "2008-08-23",
            //   weather: "晴",
            //   author: "文木",
            // },
            // {
            //   id: 6,
            //   img: require("@/assets/images/home/tp6.jpg"),
            //   title: "你好,嫘祖镇",
            //   date: "2008-08-23",
            //   weather: "晴",
            //   author: "文木",
            // },
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
.home {
  .hom-swiper{
    margin-top: 20px;
  }
  .home-bottom {
    margin-top: 20px;
  }
}
</style>
