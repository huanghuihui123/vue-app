const autoprefixer = require("autoprefixer");
const pxtoviewport = require("postcss-px-to-viewport");
module.exports = {
  outputDir: "h5", // 替换打包后的文件名
  devServer: {
    proxy: {
      "/api": {
        target: "https://nksyw.com",
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
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          autoprefixer(),
          pxtoviewport({
            viewportWidth: 750, // 设计稿的视口宽度
            selectorBlackList: ["vant"], // 忽略的CSS选择器
            minPixelValue: 1, // 最小的转换数值，大于1px才会进行转换
            exclude: /node_modules/
          })
        ]
      }
    }
  }
};
