/*
 * @@功能描述: 
 * @@工单地址: 
 * @@版本: 
 * @@作者: Devilyuan
 * @Date: 2022-01-05 15:11:34
 * @@最新修改内容: 
 * @LastEditTime: 2022-01-18 16:15:43
 */
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/scrollText",
    name: "scrollText",
    component: () =>import(/* webpackChunkName: "about" */ "@/views/scrollTextNotification/index.vue"),
    // component: resolve => require.ensure([], () => resolve(require('/views/scrollTextNotification/index'))),
    meta:{
      name:'横向滚动文字通知'
    }
  },
  {
    path: "/showPdf",
    name: "showPdf",
    component: () =>import(/* webpackChunkName: "about" */ "@/views/showPdf/index.vue"),
    meta:{
      name:'展示pdf'
    }
  },
  {
    path: "/movieBayWin",
    name: "movieBayWin",
    component: () =>import(/* webpackChunkName: "about" */ "@/views/movieBayWin/index.vue"),
    meta:{
      name:'不断移动的飘窗'
    }
  },
  {
    path: "/verificationJS",
    name: "verificationJS",
    component: () =>import(/* webpackChunkName: "about" */ "@/views/verificationJS/index.vue"),
    meta:{
      name:'验证JS'
    }
  },
  {
    path: "/echartPart",
    name: "echartPart",
    component: () =>import(/* webpackChunkName: "about" */ "@/views/echartPart/index.vue"),
    meta:{
      name:'echarts借鉴'
    }
  },
  {
    path: "/decorator",
    name: "decorator",
    component: () =>import(/* webpackChunkName: "about" */ "@/views/vueDecoratorptic/index.vue"),
    meta:{
      name:'vue装饰器练习'
    }
  },
  
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

export default router;
