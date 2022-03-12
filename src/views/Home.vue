<!--
 * @@功能描述: 
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-01-05 15:11:34
 * @@最新修改内容: 
 * @LastEditTime: 2022-03-12 09:23:17
-->
<template>
  <div>
    <h3>用于学习与自研组件的开发</h3>
    <el-row>
      <el-button type="primary" @click="toPage(0)">横向滚动文字通知</el-button>
      <el-button type="primary" @click="toPage(1)">展示pdf文档</el-button>
      <el-button type="primary" @click="toPage(2)">不断移动的飘窗</el-button>
      <el-button type="primary" @click="toPage(3)">验证JS</el-button>
      <el-button type="primary" @click="toPage(4)">echarts借鉴</el-button>
      <el-button type="primary" @click="toPage(5)">vue装饰器练习</el-button>
    </el-row>
    <el-row style="margin-top:15px">
      <el-button type="primary" @click="toPage(6)">验证码组件</el-button>
      <el-button type="primary" @click="toPage(7)">防抖节流</el-button>
    </el-row>
  </div>
</template>

<script>
import { create, all } from "mathjs";
const math = create(all);
export default {
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {
    console.log(1);
  },
  mounted() {
    console.log(2);
  },
  methods: {
    toPage(n) {
      switch (n) {
        case 0:
          this.$router.push("/scrollText");
          break;
        case 1:
          this.$router.push("/showPdf");
          break;
        case 2:
          this.$router.push("/movieBayWin");
          break;
        case 3:
          this.$router.push("/verificationJS");
          break;
        case 4:
          this.$router.push("/echartPart");
          break;
        case 5:
          this.$router.push("/decorator");
          break;
        case 6:
          this.$router.push("/yzm");
          break;
        case 7:
          this.$router.push("/debounceAndThrottle");
          break;
      }
    },
  },
  watch: {},
};
(function nmhs(a) {
  console.log(a);
})(3);
</script>

<style  >

</style>

