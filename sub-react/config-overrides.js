module.exports = {
  webpack: function(config, env) {
    // ...add your webpack config
    config.output.library = `ReactMicroApp`;
    // 将你的 library 暴露为所有的模块定义下都可运行的方式
    config.output.libraryTarget = "umd";
    // 按需加载相关，设置为 webpackJsonp_VueMicroApp 即可
    config.output.jsonpFunction = `webpackJsonp_ReactMicroApp`;

    config.resolve.alias = {
      // ...config.resolve.alias,
      // "@": path.resolve(__dirname, "src"),
    };
    return config;
  },
  devServer:function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      // config.disableHostCheck = true;
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      config.historyApiFallback = true;
      config.hot = true;
      config.open = false;
      console.log(config);
      return config;
    };

  }
}
