import { registerMicroApps, start, addGlobalUncaughtErrorHandler } from 'qiankun';

import apps from "./appList";

import NProgress from "nprogress";
import "nprogress/nprogress.css";

import { message } from "ant-design-vue";

registerMicroApps(apps,{
  beforeLoad: (app) => {
    // 加载微应用前，加载进度条
    NProgress.start();
    console.log("before load", app.name);
    return Promise.resolve();
  },
  afterMount: (app) => {
    // 加载微应用前，进度条加载完成
    NProgress.done();
    console.log("after mount", app.name);
    return Promise.resolve();
  },
});

addGlobalUncaughtErrorHandler((event) => {
  console.error(event);
  const { message: msg } = event;
  // 加载失败时提示
  if (msg && msg.includes("died in status LOADING_SOURCE_CODE")) {
    message.error("微应用加载失败，请检查应用是否可运行");
  }
});
export default start
