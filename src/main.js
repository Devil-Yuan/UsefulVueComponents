/*
 * @@功能描述: 
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-01-05 15:11:34
 * @@最新修改内容: 
 * @LastEditTime: 2022-01-24 14:25:33
 */
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Element from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import BreadCrumb from '@/components/breadcrumb';
//fundebug 使用测试
import * as fundebug from "fundebug-javascript";
import fundebugVue from "fundebug-vue";
fundebug.apikey = "a1acc28bc88d01c41b09551765be49fe4f7455deb185e95881a96168ee7e91d7"
fundebugVue(fundebug, Vue);

Vue.use(Element);
Vue.component('BreadCrumb', BreadCrumb); // 面包屑 组件
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
