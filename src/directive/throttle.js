/*
 * @@功能描述: 
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-03-12 11:07:03
 * @@最新修改内容: 
 * @LastEditTime: 2022-03-12 11:36:55
 */
import Vue from 'vue';
import {throttle} from './../utils/index';
const throttle1 = Vue.directive('throttl',{
    bind(el, binding, vnode){
        const [fn,wat,imd] = binding.value;
        el.addEventListener("click",throttle(fn,wat,imd))
    }
})
export default throttle1;