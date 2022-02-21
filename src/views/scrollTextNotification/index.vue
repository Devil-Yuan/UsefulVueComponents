<!--
 * @@功能描述:横向滚动文字通知 
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-01-13 09:34:07
 * @@最新修改内容: 
 * @LastEditTime: 2022-01-18 15:20:34
-->
<template>
    <div>
        <BreadCrumb />
        横向通知
        <notice :message="message"></notice>
    </div>
</template>

<script>
import notice from "./components/notice";
export default {
    components: {
        notice
    },
    data() {
        return {
            // message: "vue 滚动公告栏 <span>自定义文字</span> 滚动公告栏  <span>自定义文字</span>滚动公告栏 <span>自定义文字</span> 滚动公告栏 <span>自定义文字</span>",
            message: "vue 滚动公告栏重要通知"
        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {

    },
    watch: {

    },
};
</script>

<style scoped >

</style>
