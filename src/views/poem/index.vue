<template>
  <div class="poem">
    <poemCom :list="list"></poemCom>
  </div>
</template>

<script>
import poemCom from "../../components/Poem/Poem";
export default {
  name: "Poem",
  // 组件
  components: {
    poemCom,
  },
  data() {
    return {
      list: [
        {
          id: 11,
          title: "春",
          data: [
            {
              id: 1,
              img: require("@/assets/images/poem/chun/chun1.jpg"),
              introduce:
                "春天常常带给人一种心旷神怡的感觉，如果你到大自然里去品味春的气息，会给你增添无穷的力量，春天给人们带来了希望和美好。人们在春天播下了希望的种子，等待着秋的收获。春天是花的世界，是一切美的融合，是一切色彩的总会。",
              reverse: false,
            },
            {
              id: 2,
              img: require("@/assets/images/poem/chun/chun2.jpg"),
              introduce:
                "春天，暖暖的风。“沾衣欲湿杏花雨，吹面不寒杨柳风。”春天的风总是那般的轻柔，就像温柔的手轻轻抚摸着脸颊，让人顿生幸福之感。感受着温柔的春风，在广袤无垠的旷野中漫步，也确为一件趣事。",
              reverse: true,
            },
            {
              id: 3,
              img: require("@/assets/images/poem/chun/chun3.jpg"),
              introduce:
                "春姑娘还带来了阵阵细雨，滋润着大地。小草从大地母亲的怀抱中探出头来，贪婪地吸吮着这甜美的甘露。田野里的桃花张开了粉红的笑脸，随着微风在得意地摇晃着。小树很快长出小片小片的叶子，嫩绿嫩绿的，就象刚出生的婴儿，怪逗人喜欢的。庭院旁的红棉树，一片叶子都还没长，却满树开着红彤彤的木棉花，似乎争着向人们报春。",
              reverse: false,
            },
            {
              id: 4,
              img: require("@/assets/images/poem/chun/chun4.jpg"),
              introduce:
                "春天是一个新起点。他让许多绝望的人感受到温暖和幸福。每逢春天来临时，我都会在心里暗暗鼓劲“以往的一切都应成为过去，要做的，只有把握好今天。”是春天，给了我希望，让我重新鼓起勇气向目标驶去。是春天，给了我力量，让我在新的一年里越发努力。是春天，给了我温暖，让我感受到生命的可贵。",
              reverse: true,
            },
          ],
        },
        {
          id: 22,
          title: "夏",
          data: [
            {
              id: 1,
              img: require("@/assets/images/poem/xia/xia1.jpg"),
              introduce:
                "、夏天的味道，风轻无雨，只有骄阳炙烤着大地，连同我的思绪一起飘逸，一时找不到心灵的静谧，滚烫的红豆与炎热的思念在纯洁的心间热情的跳动，键盘上涂满的只有你的名字，我呆望着这熟悉的三个字，又想起了我们相识以来的点滴，曾经的讨厌与烦恼被你调皮的莞尔一笑显得是那样苍白无力。",
              reverse: false,
            },
            {
              id: 2,
              img: require("@/assets/images/poem/xia/xia2.jpg"),
              introduce:
                "夏天是暖和的。太阳初升，温暖的阳光照在房顶上，人们就赶趟的出来晒晒暖和的阳光。花草树木吸收着阳光养料茁壮成长，好为后面的风风雪雪做好抵抗。森林里，刚升起的阳光透过树叶照射在地上，星星般的光芒在地上一闪一闪的，小鸟为寂寞的森林演奏着歌曲。",
              reverse: true,
            },
            {
              id: 3,
              img: require("@/assets/images/poem/xia/xia3.jpg"),
              introduce:
                "夏日的黄昏，淅淅沥沥的小雨四处飞洒，带着清新明快的旋律，含情脉脉的音韵，把人引入遐想的意境。很快，小雨变为大雨，没过多久便乌云密布，雷声滚滚，紧接着，大雨就劈头盖脸的倾泻了下来，真是别有一盘韵味！",
              reverse: false,
            },
            {
              id: 4,
              img: require("@/assets/images/poem/xia/xia4.jpg"),
              introduce:
                "夏天的味道，多少人在这光芒的时刻染上永恒，滚烫的空气，指间的微凉，思念如泼墨，泛起层层渲染，而今的彼此，隔着时光看彼岸，对岸夏天里的青春正一天一天地成熟，你微笑的脸庞，我浅唱着婉词，生如夏花般绽放，空气中的絮语，那一抹纯白的似水柔情，诠释着七月流火最美的纪念。",
              reverse: true,
            },
          ],
        },
        {
          id: 33,
          title: "秋",
          data: [
            {
              id: 1,
              img: require("@/assets/images/poem/qiu/qiu1.jpg"),
              introduce:
                "秋天，那永远是蓝湛湛的天空，会突然翻脸而露出险恶的颜色，热带台风夹着密云暴雨，洪水潜流着，复苏的草原又泛起点点苍苍的颜色。然而，台风暴雨一闪而过，强烈的气流依然抖动着耀眼的波光。这时，只有北来的候鸟知道这张温暖的床眠，那飞翔的天鹅、鸿雁和野鸭，就像一片阴深的云朵，使这儿显得更苍郁了。",
              reverse: false,
            },
            {
              id: 2,
              img: require("@/assets/images/poem/qiu/qiu2.jpg"),
              introduce:
                "秋雨打着她们的脸。一堆堆深灰色的迷云，低低地压着大地。已经是深秋了，森林里那一望无际的林木都已光秃，老树阴郁地站着，让褐色的苔掩住它身上的皱纹。无情的秋天剥下了它们美丽的衣裳，它们只好枯秃地站在那里。",
              reverse: true,
            },
            {
              id: 3,
              img: require("@/assets/images/poem/qiu/qiu3.jpg"),
              introduce:
                "秋蝉的衰弱的残声，更是北国的特产；因为北平处处全长着树，屋子又低，所以无论在什么地方，都听得见它们的啼唱。在南方是非要上郊外或山上去才听得到的。这秋蝉的嘶叫，在北平可和蟋蟀耗子一样，简直象是家家户户都养在家里的家虫。",
              reverse: false,
            },
            {
              id: 4,
              img: require("@/assets/images/poem/qiu/qiu4.jpg"),
              introduce:
                "秋天带着落叶的声音来了，早晨像露珠一样新鲜。天空发出柔和的光辉，澄清又缥缈，使人想听见一阵高飞的云雀的歌唱，正如望着碧海想着见一片白帆。夕阳是时间的翅膀，当它飞遁时有一刹那极其绚烂的展开。于是薄暮。",
              reverse: true,
            },
          ],
        },
        {
          id: 44,
          title: "冬",
          data: [
            {
              id: 1,
              img: require("@/assets/images/poem/dong/dong1.jpg"),
              introduce:
                "雪，盖满了屋顶，马路，压断了树枝，隐没了种种物体的外表，阻塞了道路与交通，漫天飞舞的雪片，使天地溶成了白色的一体。、冷飕飕的风呼呼地刮着。光秃秃的树木，像一个个秃顶老头儿，受不住西北风的袭击，在寒风中摇曳。",
              reverse: false,
            },
            {
              id: 2,
              img: require("@/assets/images/poem/dong/dong2.jpg"),
              introduce:
                "傍晚，大片大片的雪花，从昏暗的天空中纷纷扬地飘落下来。霎时间，山川、田野、村庄，全都笼罩在白蒙蒙的大雪之中。落光了叶子的柳树上，挂满了毛茸茸、亮晶晶的银条儿；冬夏常青的松树和柏树，堆满了蓬松松、沉甸甸的雪球。",
              reverse: true,
            },
            {
              id: 3,
              img: require("@/assets/images/poem/dong/dong3.jpg"),
              introduce:
                "那雪花洁白如玉，它是天宫派下的小天将，还是月宫桂树上落下的玉叶呢？雪花像美丽的玉色蝴蝶，似舞如醉；像吹落的蒲公英；似飘如飞；像天使赏赠的小白花儿；忽散忽聚，飘飘悠悠，轻轻盈盈，无愧是大地的杰作！只见眼前的雪花像蝴蝶一样调皮，一会儿落在屋檐下，一会落在树枝上，还不时飘在行人的脸上。",
              reverse: false,
            },
            {
              id: 4,
              img: require("@/assets/images/poem/dong/dong4.jpg"),
              introduce:
                "风越来越大了。那朵小云变成了一片白色的浓云，慢慢地升了起来，扩大起来，渐渐遮满了天空。下起小雪来了。陡然间，落起大块的雪片来了。风呜呜地吼了起来，暴风雪来了。一霎时，暗黑的天空同雪海打成了一片，一切都看不见了。",
              reverse: true,
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
