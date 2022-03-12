<!--
 * @@功能描述: 验证JS
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-01-18 14:13:25
 * @@最新修改内容: 
 * @LastEditTime: 2022-03-12 09:23:05
-->
<template>
  <div class="yzjs_wrap">
    <BreadCrumb />
    <h3>验证JS</h3>
    <div>数组是['1','3','5','7','4']</div>
    <div class="item_wrap">
      <div>
        <el-input
          v-model.trim="inputval"
          placeholder="验证.at 输入要取的位数值"
        ></el-input>
      </div>
      <div>
        <el-button type="primary" @click="yzat">输出.at值</el-button>
      </div>
      <div>
        <span>结果为：{{ cinputval }}</span>
      </div>
    </div>
    <el-divider></el-divider>
    <div>对象是{ sex:'man', age:'18', xj:'本科' } 只能验证KEY</div>
    <div class="item_wrap">
      <div>
        <el-input
          v-model.trim="inputval1"
          placeholder="验证Object.hasOwn 输入要验证的值"
        ></el-input>
      </div>
      <div>
        <el-button type="primary" @click="yzat1">输出验证结果</el-button>
      </div>
      <div>
        <span>结果为：{{ cinputval1 }}</span>
      </div>
    </div>
    <el-divider></el-divider>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      iptarr: ["1", "3", "5", "7", "4"],
      inputval: "",
      cinputval: "",
      iptobj: {
        sex: "man",
        age: "18",
        xj: "本科",
      },
      inputval1: "",
      cinputval1: "",
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    yzat() {
      let an = Number(this.inputval);
      this.cinputval = this.iptarr.at(an);
    },
    yzat1() {
      if (Object.hasOwn(this.iptobj, this.inputval1)) {
        this.cinputval1 = "有";
      } else {
        this.cinputval1 = "无";
      }
    },
  },
  watch: {},
};
</script>

<style scoped lang="scss">
.yzjs_wrap {
  width: 80%;
  min-height: 70vh;
  margin: 20px auto;
  border: 1px solid #ccc;
  padding: 0 20px;
  
}
.item_wrap {
  margin: 10px 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
}
</style>
