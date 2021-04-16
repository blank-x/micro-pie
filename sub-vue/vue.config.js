module.exports = {
  // 选项...
  devServer:{
    port:10001,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },

    // disableHostCheck: true,  // 这个需要么
  },
  configureWebpack: {
    output: {
      // 微应用的包名，这里与主应用中注册的微应用名称一致
      library: "VueMicroApp",
      // 将你的 library 暴露为所有的模块定义下都可运行的方式
      libraryTarget: 'umd',
      // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
      jsonpFunction: `webpackJsonp_VueMicroApp`,  // 看看改个名字还行不行
    }
  }
}
