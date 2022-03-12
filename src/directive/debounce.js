/*
 * @@功能描述: 防抖指令
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-03-12 11:06:55
 * @@最新修改内容: 
 * @LastEditTime: 2022-03-12 11:35:50
 */
import Vue from 'vue';
import {debounce} from './../utils/index'
const debounce1 = Vue.directive('bounce',{
    bind(el, binding, vnode){
        const [fn,wat,imd] = binding.value
        el.addEventListener("click", debounce(fn,wat,imd))
    }
})
export default debounce1;