import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './routes'
Vue.config.productionTip = false
Vue.use(VueRouter);

let router = null;
let instance = null;
function render() {
  // 在 render 中创建 VueRouter，可以保证在卸载微应用时，移除 location 事件监听，防止事件污染
  // 挂载应用
  router = new VueRouter({
    // 运行在主应用中时，添加路由命名空间 /vue
    base: window.__POWERED_BY_QIANKUN__ ? "/vue" : "/",
    mode: "history",
    routes,
  });

  instance = new Vue({
    router,
    render: (h) => h(App),
  }).$mount("#app");
}

if (!window.__POWERED_BY_QIANKUN__) {
  render()
}

// 返回 promise
// bootstrap 只会在微应用初始化的时候调用一次，下次微应用重新进入时会直接调用 mount 钩子，不会再重复触发 bootstrap。
// 通常我们可以在这里做一些全局变量的初始化
export async function bootstrap() {
  console.log("vue micro app bootstrap");
}

//   应用每次进入都会调用 mount 方法，通常我们在这里触发应用的渲染方法
export async function mount(props) {
  console.log("vue micro app  mount", props);
  render(props);
}
// 应用每次卸载会调用unmount，通常在这里我们会卸载微应用的应用实例
export async function unmount() {
  console.log("vue micro app  unmount");
  instance.$destroy();
  instance = null;
  router = null;
}