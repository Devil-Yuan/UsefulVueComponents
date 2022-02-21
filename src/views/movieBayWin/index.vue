<!--
 * @@功能描述: 不断移动的飘窗
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-01-18 10:56:35
 * @@最新修改内容: 
 * @LastEditTime: 2022-01-18 15:20:06
-->
<template>
  <div class="mwp">
    <BreadCrumb />
    <div class="mbw_wrap">
      不断移动的飘窗
      <div
        class="pcbox"
        ref="bayWin"
        @mouseenter="enterbayWin"
        @mouseleave="leaveWin"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      isShowBay: false,
      x: 50,
      y: 50,
      xin: true,
      yin: true,
      step: 1,
      delay: 20,
      timer: null,
    };
  },
  computed: {},
  created() {
    this.isShowBay = true;
    this.routeEnterShowAdbox();
  },
  mounted() {},
  destroy() {
    clearInterval(this.timer);
  },
  beforeRouteLeave(to, from, next) {
    next((vm) => {});
    clearInterval(this.timer);
  },
  methods: {
    // 取消飘窗cancelBay
    cancelBay() {
      this.isShowBay = false;
      clearInterval(this.timer);
    },
    // 鼠标进入
    enterbayWin() {
      clearInterval(this.timer);
    },
    // 鼠标移出
    leaveWin() {
      if (this.isShowBay === false) {
        clearInterval(this.timer);
      } else {
        this.timer = setInterval(this.movebayWin, this.delay);
      }
    },
    movebayWin() {
      let L = 0;
      let T = 0;
      if (this.$refs.bayWin) {
        let R =
          (document.documentElement.clientWidth || document.body.clientWidth) -
          this.$refs.bayWin.offsetWidth; //浏览器显示宽度-adbox宽度，不随滚动条变化而变化
        let B =
          (document.documentElement.clientHeight ||
            document.body.clientHeight) - this.$refs.bayWin.offsetHeight; //浏览器显示高度-adbox高度，不随滚动条变化而变化
        this.$refs.bayWin.style.left = this.x + "px";
        this.$refs.bayWin.style.top = this.y + "px";
        this.x = this.x + this.step * (this.xin ? 1 : -1);
        if (this.x < L) {
          this.xin = true;
          this.x = L;
        }
        if (this.x > R) {
          this.xin = false;
          this.x = R;
        }
        this.y = this.y + this.step * (this.yin ? 1 : -1);
        if (this.y < T) {
          this.yin = true;
          this.y = T;
        }
        if (this.y > B) {
          this.yin = false;
          this.y = B;
        }
      }
    },
    routeEnterShowAdbox() {
      this.timer = setInterval(this.movebayWin, this.delay);
    },
    // 判断过期时间
    isOverTime(deadline) {
      return new Date() > new Date(deadline); // 结果为true表示过期，false反之
    },
  },
  watch: {},
};
</script>

<style scoped lang='scss'>
.mwp {
    width: 100%;
    height: 100vh;
  .mbw_wrap {
    width: 100%;
    height:100%;;
    background-color: #ccc;
    .pcbox {
      position: fixed;
      z-index: 2000;
      width: 100px;
      height: 100px;
      border: 1px solid #666;
      background: yellow;
    }
  }
}
</style>
