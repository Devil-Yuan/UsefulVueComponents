<!--
 * @@功能描述: echarts借鉴
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-01-18 16:12:01
 * @@最新修改内容: 
 * @LastEditTime: 2022-01-18 16:23:42
-->
<template>
  <div class="echartpart_wrap">
    <BreadCrumb />
    <h3>echarts借鉴</h3>
    <div class="pwrap">
      <div class="pitem" id="echart1" ref="myChart1"></div>
    </div>
  </div>
</template>

<script>
import * as echarts from "echarts";
require("echarts/theme/macarons");
export default {
  components: {},
  props: {},
  data() {
    return {
      conHeight: 0,
    };
  },
  computed: {},
  created() {
    this.conHeight = window.innerHeight - 280 + "px";
    window.onresize = function temp() {
      this.conHeight = window.innerHeight - 280 + "px"; //获取弹框高度(监控高度变化)
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.$nextTick(() => {
        this.initchart1();
      });
    },
    initchart1() {
      let chartDom1 = this.$refs.myChart1;
      chartDom1.removeAttribute("_echarts_instance_");
      let chart1 = echarts.init(chartDom1, "macarons");
      chart1.setOption(
        {
          title: {
            text: "Stacked Area Chart",
          },
          tooltip: {
            trigger: "axis",
            axisPointer: {
              type: "cross",
              label: {
                backgroundColor: "#6a7985",
              },
            },
          },
          legend: {
            data: [
              "Email",
              "Union Ads",
              "Video Ads",
              "Direct",
              "Search Engine",
            ],
          },
          toolbox: {
            feature: {
              saveAsImage: {},
            },
          },
          grid: {
            left: "3%",
            right: "4%",
            bottom: "3%",
            containLabel: true,
          },
          xAxis: [
            {
              type: "category",
              boundaryGap: false,
              data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
            },
          ],
          yAxis: [
            {
              type: "value",
            },
          ],
          series: [
            {
              name: "Email",
              type: "line",
              stack: "Total",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
              data: [120, 132, 101, 134, 90, 230, 210],
            },
            {
              name: "Union Ads",
              type: "line",
              stack: "Total",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
              data: [220, 182, 191, 234, 290, 330, 310],
            },
            {
              name: "Video Ads",
              type: "line",
              stack: "Total",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
              data: [150, 232, 201, 154, 190, 330, 410],
            },
            {
              name: "Direct",
              type: "line",
              stack: "Total",
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
              data: [320, 332, 301, 334, 390, 330, 320],
            },
            {
              name: "Search Engine",
              type: "line",
              stack: "Total",
              label: {
                show: true,
                position: "top",
              },
              areaStyle: {},
              emphasis: {
                focus: "series",
              },
              data: [820, 932, 901, 934, 1290, 1330, 1320],
            },
          ],
        },
        true
      );
      window.addEventListener("resize", function () {
        chart1.resize(); //页面大小变化后Echarts也更改大小
      });
    },
  },

  watch: {
    // chartData: {
    //   handler(newVal, oldVal) {
    //     this.chartData = newVal;
    //   },
    //   deep: true,
    // },
  },
};
</script>

<style lang="scss" scoped >
.echartpart_wrap {
  width: 100%;
  height: 70vh;
  .pwrap {
    width: 100%;
    height:80vh;
    .pitem {
      width: 100%;
      height: 100%;
    }
  }
}
</style>
