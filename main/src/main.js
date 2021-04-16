import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import router from "./router";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.min.css"
import store from './store'
Vue.config.productionTip = false
import startQiankun from "./micro";
import './shared'
import './permission'
startQiankun();

Vue.use(VueRouter);
Vue.use(Antd);


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')


