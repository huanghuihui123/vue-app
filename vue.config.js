module.exports = {
  outputDir: "h5", // 替换打包后的文件名
  devServer: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        changeOrigin: true,
        secure: false
      }
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(args => {
      args[0].title = "express app";
      return args;
    });
  }
};
