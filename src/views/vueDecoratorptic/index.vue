<!--
 * @@功能描述: vue 装饰器练习 相当于一个拦截弹窗的作用 写在要拦截操作方法的外上
               代码排列顺序即为拦截执行顺序
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-01-25 09:32:23
 * @@最新修改内容: 
 * @LastEditTime: 2022-01-25 10:25:47
-->
<template>
    <div style="padding:30px 0;width:100%;height:100vh">
        <BreadCrumb />
        <el-button @click="dto1">点击出弹窗1</el-button>
        <el-button @click="dto2">点击出弹窗2</el-button>
    </div>
</template>

<script>
import { confirmation ,confirm} from './decoratorp';
export default {
    components: {

    },
    data() {
        return {

        };
    },
    computed: {

    },
    created() {

    },
    mounted() {

    },
    methods: {
        @confirmation('此操作将永久删除该文件, 是否继续?')
        dto1(){
            console.log('dto1')
        },
        @confirm('确认操作','请确认是否执行此操作？')
        dto2(){
            console.log('dto2')
        },
    },
    watch: {

    },
};
</script>

<style scoped >

</style>
