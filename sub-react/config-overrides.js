module.exports = {
  webpack: function(config, env) {
    // ...add your webpack config
    return config;
  },
  devServer:function (configFunction) {
    return function (proxy, allowedHost) {
      const config = configFunction(proxy, allowedHost);
      config.disableHostCheck = true;
      config.headers = {
        "Access-Control-Allow-Origin": "*",
      };
      config.historyApiFallback = true;
      config.hot = true;
      config.open = false;
      config.port = 10002
      console.log(config);
      return config;
    };

  }
}
