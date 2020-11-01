<template>
  <!-- footer bar 组件 -->
  <div class="footer">
    <!-- 其他信息 -->
    <div class="footer-con">
      <div class="footer-con-img">
        <!-- 微信 -->
        <div class="con-img-vx">
          <img class="img-vx" :src="vx" alt="" />
        </div>
      </div>
      <div class="footer-info">
        <div class="footer-info-top">
          <span class="footer-postcode">邮政编码: 463000</span>
          <span class="fooer-wx">微信号码: shi-_-jie</span>
        </div>
        <div class="footer-info-main">
          <p class="footer-support">技术支持: 文木</p>
          <p class="footer-tel">联系电话: 15713656967</p>
        </div>
        <div class="footer-info-bottom">
          <p class="footer-copyright">版权所有: 文木</p>
          <p class="footer-link">
            <a class="link-a" href="http://beian.bizcn.com/login.jsp"
              >@备案查询: 点击查询</a
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FooterBar",
  data() {
    return {
      vx: require("@/assets/images/home/vx.png"),
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

<style  scope lang="scss">
.footer {
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  color: #999;
  background-color: #222;
  .footer-con {
    width: 1200px;
    height: 200px;
    display: flex;
    align-items: center;
    //     // 图片
    .footer-con-img {
      width: 350px;
      height: 100%;
      margin-left: 150px;
      margin-top: 50px;
      .con-img-vx {
        width: 150px;
        height: 150px;
        .img-vx {
          width: 100%;
          height: 100%;
        }
      }
    }
    // 信息
    .footer-info {
      width: 850px;
      .footer-info-top,
      .footer-info-main,
      .footer-info-bottom {
        display: flex;
        justify-content: space-around;
        line-height: 45px;
      }
      .footer-link {
        .link-a {
          color: #999999;
          &.link-a:hover {
            color: orange;
          }
        }
      }
    }
  }
}
</style>