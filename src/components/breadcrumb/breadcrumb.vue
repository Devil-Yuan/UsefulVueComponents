<!--
 * @@功能描述: 面包屑
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-01-18 14:57:30
 * @@最新修改内容: 
 * @LastEditTime: 2022-01-18 15:12:53
-->
<template>
  <div class="breadcrumb_wrap">
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $route.meta.name }}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
     name: "BreadCrumb",
  components: {},
  data() {
    return {};
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {},
  watch: {},
};
</script>

<style scoped lang='scss'>
.breadcrumb_wrap{
    width: 100%;
    background: #fff;
    margin: 10px 0;
    padding: 0 10px;
    box-sizing: border-box;
}
</style>
