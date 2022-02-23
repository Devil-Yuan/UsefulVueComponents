<!--
 * @@功能描述: 
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-02-23 22:01:27
 * @@最新修改内容: 
 * @LastEditTime: 2022-02-23 22:11:17
-->
<template>
  <div class="wrap">
    <BreadCrumb />
    <div style="display:flex;align-items:center;width:100%;justify-content: center;">
        <div>验证码组件：</div>
      
      <div style="border:1px dashed #eee;height:150px;width:150px">
        <Yzm
          ref="yzm"
          :yzmCode="yzmCode"
          @click.native="refreshCode"
          :contentWidth="150"
          :contentHeight="150"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Yzm from "./components/yzm.vue";
export default {
  components: {
    Yzm,
  },
  data() {
    // 校验验证码
    // const regYzm = (rule, value, callback) => {
    //   if (this.loginForm.yzm != this.yzmCode) {
    //     callback(new Error("验证码错误！"));
    //   } else {
    //     callback();
    //   }
    // };
    return {
      yzmCode: "",
    };
  },
  computed: {},
  created() {},
  mounted() {
    this.refreshCode();
  },
  methods: {
    // 验证码
    randomNum(min, max) {
      let val = Math.floor(Math.random() * (max - min) + min);
      return val;
    },
    refreshCode() {
      this.yzmCode = "";
      this.makeCode(this.yzmCode, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.yzmCode += this.randomNum(0, 9);
      }
    },
  },
  watch: {},
};
</script>

<style scoped >
.wrap {
  padding: 10px 30px;
  text-align: center;
  width: 100%;
  height: 100vh;
}
</style>
