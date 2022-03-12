<!--
 * @@功能描述: 
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-03-12 09:24:01
 * @@最新修改内容: 
 * @LastEditTime: 2022-03-12 11:38:26
-->
<template>
  <div class="wrap">
    <div class="top">
      <div class="item">
        <div>
          <el-button @click="wfdbtn">未防抖</el-button>
          <el-button type="primary" @click="fdbtn">防抖</el-button>
        </div>
        <div class="con">
          <div>{{ val1 }}</div>
          <div>{{ val2 }}</div>
        </div>
      </div>
      <div class="item">
        <div>
          <el-button @click="wjlbtn">未节流</el-button>
          <el-button type="primary" @click="jlbtn">节流</el-button>
        </div>
        <div class="con">
          <div>{{ val3 }}</div>
          <div>{{ val4 }}</div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="btit">自定义指令防抖节流</div>
      <div>
        <div>
          <el-button @click="wzlfdbtn">未防抖</el-button>
          <el-button type="primary" v-bounce="[zlfdbtn,300,0]" >防抖</el-button>
          <el-button @click="wzljlbtn">未节流</el-button>
          <el-button type="primary" v-throttl="[zljlbtn,1000,0]" >节流</el-button>
        </div>
        <div class="bcon">
          <div>{{ val5 }}</div>
          <div>{{ val6 }}</div>
          <div>{{ val7 }}</div>
          <div>{{ val8 }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { debounce, throttle } from "@/utils/index";
export default {
  components: {},
  data() {
    return {
      val1: 0,
      val2: 0,
      val3: 0,
      val4: 0,
      val5: 0,
      val6: 0,
    val7: 0,
      val8: 0,
    };
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    wfdbtn() {
      this.val1 += 1;
    },
    fdbtn: debounce(function () {
      this.val2 += 1;
    }, 300),
    wjlbtn() {
      this.val3 += 1;
    },
    jlbtn: throttle(function () {
      this.val4 += 1;
    }, 1000),
    wzlfdbtn(){
        this.val5 += 1;
    },
    zlfdbtn(){
        this.val6 += 1;
    },
    wzljlbtn(){
        this.val7 += 1;
    },
     zljlbtn(){
        this.val8 += 1;
    }
  },
  watch: {},
};
</script>

<style scoped lang='scss'>
.wrap {
  height: 96vh;
  border: 1px dashed #ccc;
  margin: 10px;

  .top {
    height: 50%;
    display: flex;
    justify-content: space-between;
    .item {
      width: 48%;
      height: 100%;
      background: rgb(207, 205, 205);
      padding: 10px;
      .con {
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          text-align: center;
          width: 50%;
        }
      }
    }
  }
  .bottom {
    height: 50%;
    .btit {
      text-align: center;
    }
    .bcon{
        margin-top: 50px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        div {
          text-align: center;
          width: 25%;
        }
    }
  }
}
</style>
