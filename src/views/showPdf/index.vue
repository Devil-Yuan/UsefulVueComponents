<!--
 * @@功能描述: 
 * @@工单地址: 展示pdf
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-01-18 09:38:57
 * @@最新修改内容: 
 * @LastEditTime: 2022-01-18 15:23:02
-->
<template>
  <div>
    <BreadCrumb />
    展示pdf
    <div class="tools">
      <el-button type="text" @click.stop="prePage"> 上一页</el-button>
      <el-button type="text" @click.stop="nextPage"> 下一页</el-button>
      <div class="page">{{ pageNum }}/{{ pageTotalNum }}</div>
      <el-button type="text" @click.stop="clock"> 顺时针</el-button>
      <el-button type="text" @click.stop="counterClock"> 逆时针</el-button>
      <el-button type="text" @click.stop="printpdf"> 打印</el-button>
    </div>
    <div class="pdf_wrap">
      <pdf
        ref="pdf"
        :src="url"
        :page="pageNum"
        :rotate="pageRotate"
        @progress="loadedRatio = $event"
        @page-loaded="pageLoaded($event)"
        @num-pages="pageTotalNum = $event"
        @error="pdfError($event)"
        @link-clicked="page = $event"
      >
      </pdf>
    </div>
  </div>
</template>

<script>
import pdf from "vue-pdf";

export default {
  components: {
    pdf,
  },
  data() {
    return {
      url: "../../../static/czzn.pdf",
      pageNum: 1,
      pageTotalNum: 1,
      pageRotate: 0,
      // 加载进度
      loadedRatio: 0,
      curPageNum: 0,
    };
  },
  computed: {},
  created() {
    this.url = pdf.createLoadingTask(this.url);
  },
  mounted() {},
  methods: {
    // 上一页函数，
    prePage() {
      var page = this.pageNum;
      page = page > 1 ? page - 1 : this.pageTotalNum;
      this.pageNum = page;
    },
    // 下一页函数
    nextPage() {
      var page = this.pageNum;
      page = page < this.pageTotalNum ? page + 1 : 1;
      this.pageNum = page;
    },
    // 页面顺时针翻转90度。
    clock() {
      this.pageRotate += 90;
    },
    // 页面逆时针翻转90度。
    counterClock() {
      this.pageRotate -= 90;
    },
    // 页面加载回调函数，其中e为当前页数
    pageLoaded(e) {
      this.curPageNum = e;
    },
    // 其他的一些回调函数。
    pdfError(error) {
      console.error(error);
    },
    //打印
    printpdf() {
      this.$refs.pdf.print();
    },
  },
  watch: {},
};
</script>

<style scoped lang='scss'>
.pdf_wrap {
  width: 80%;
  border: 1px solid #ccc;
  margin: 25px auto;
}
</style>
