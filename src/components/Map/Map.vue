<template>
  <div class="map">
    <div class="map-main">
      <h1 class="map-main-title">河南省 西平县 嫘祖镇 位置及介绍</h1>
      <baidu-map
        class="bm-view"
        :scroll-wheel-zoom="true"
        :center="center"
        :zoom="zoom"
        @ready="handler"
      >
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-map-type
          :map-types="['BMAP_NORMAL_MAP', 'BMAP_HYBRID_MAP']"
          anchor="BMAP_ANCHOR_TOP_LEFT"
        ></bm-map-type>
        <bm-overview-map
          anchor="BMAP_ANCHOR_BOTTOM_RIGHT"
          :isOpen="true"
        ></bm-overview-map>
        <bm-marker
          :position="{ lng: 113.746331, lat: 33.395454 }"
          :dragging="true"
          animation="BMAP_ANIMATION_BOUNCE"
          :icon="{
            url: 'http://developer.baidu.com/map/jsdemo/img/fox.gif',
            size: { width: 300, height: 157 },
          }"
        >
          <!-- <bm-label
            content="家乡~~"
            :labelStyle="{ color: 'red', fontSize: '24px' }"
            :offset="{ width: -35, height: 30 }"
          /> -->
        </bm-marker>
      </baidu-map>
      <!--  -->
      <div class="map-main-info">
        <p class="main-info-introduce">
          西平县嫘祖镇，位于西平县西部，距离县城35公里处，东靠师灵镇、杨庄乡，西临舞阳县辛安乡，南与芦庙乡相连，西南与出山镇、舞钢市枣林镇毗邻，北与舞阳县吴城镇接壤。是漯河、舞阳、平顶山三县、市交汇处。辖区共20个行政村，面积67.35平方千米（2017年），人口39293人（2017年），耕地面积6万亩。嫘祖镇原名吕店乡，2016年3月26日，根据《河南省民政厅关于西平县撤销吕店乡设立嫘祖镇的批复》（豫民行批〔2016〕4号），撤销西平县吕店乡建立嫘祖建制镇，实行镇管村体制，所辖行政区域和政府驻地不变。
        </p>
        <p class="main-info-introduce">
          嫘祖是中华人文始祖黄帝正妃，是她发明植桑养蚕、缫丝制衣，和黄帝一道开创中华男耕女织的农耕文明，被誉为“人文女祖”。《史记·五帝本纪》载：“黄帝居轩辕之丘，而娶于西陵之女，是为嫘祖。嫘祖为黄帝正妃，生两子，其后皆有天下。其一曰玄嚣，是为青阳，青阳降居江水。其二曰昌意，降居若水。”神话传说中把她说成养蚕缫丝方法的创造者。西平古为西陵（《水经注》载“西陵平夷，故曰西平”）。由中华炎黄文化研究会、河南省炎黄文化研究会联合主办，西平县人民政府承办的“中国河南西平嫘祖文化研讨会”在河南省西平县举行。来自中华炎黄文化研讨会、中国姓氏研究所、河南省炎黄文化研讨会及中国社会科学院、国家博物院、北京社会科学院、复旦大学等单位的60余位著名历史学家、考古学家、民俗学家、社会学家云集西平县，对中华民族的伟大母亲——蚕神嫘祖故里地望、嫘祖文化及嫘祖文化产业开发等进行了学术探讨。
          专家最终认定：西平县吕店乡的董桥遗址就是嫘祖故里。2007年6月“中国嫘祖文化之乡”顺利通过了中国民间文化之乡专家组的评审验收。
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Map",
  // 组件
  components: {},
  data() {
    return {
      center: { lng: 0, lat: 0 },
      zoom: 10,
    };
  },
  // 事件
  methods: {
    handler({ BMap, map }) {
      this.center.lng = 113.746331;
      this.center.lat = 33.395454;
      this.zoom = 10;
    },
  },
  // 周期一
  created() {},
  // 周期二
  mounted() {},
  // 计算属性
  computed: {},
};
</script>

<style scoped lang="scss">
.map {
  width: 100%;
  .map-main {
    width: 1200px;
    margin: 0 auto;
    .map-main-title {
      text-align: center;
      font-size: 32px;
      margin: 12px 0;
    }
    .bm-view {
      width: 100%;
      height: 500px;
      border: 3px dashed rgb(156, 145, 145);
      &:hover {
        border: 3px dashed orange;
      }
    }
    .map-main-info {
      width: 1200px;
      height: 100%;
      margin: 15px 0;
      .main-info-introduce {
        text-indent: 2em;
        font-size: 18px;
        color: #333;
        line-height: 24px;
      }
    }
  }
}
</style>
