import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "./routes";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.min.css"
Vue.config.productionTip = false
import startQiankun from "./micro";

startQiankun();

Vue.use(VueRouter);
Vue.use(Antd);


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
