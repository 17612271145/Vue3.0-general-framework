const WebpackAliyunOssPlugin = require('webpack-aliyun-oss-plugin')
const env = process.env

const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
module.exports = {
  baseUrl: env.BASE_URL,
  assetsDir: "static",
  lintOnSave: false,
  productionSourceMap: false,
  configureWebpack() {
    const plugins = []

    // 存在 BASE_URL 环境变量，上传静态资源到 Aliyun OSS
    if (env.BASE_URL) {
      plugins.push(new WebpackAliyunOssPlugin({
        ak: env.OSS_AK,
        sk: env.OSS_SK,
        bucket: env.OSS_BUCKET,
        region: env.OSS_REGION,
        filter(asset) {
          return !/\.html$/.test(asset)
        }
      }))
    }

    return {
      plugins,
      externals: {
        'vue': 'Vue',
        'element-ui': 'ELEMENT',
        'vue-router': 'VueRouter',
        'vuex': 'Vuex',
        'axios': 'axios',
      },
      resolve: {
        extensions: [".js", ".vue", ".json"],
        modules: [
          resolve('src'),
          resolve('public'),
          resolve('node_modules')
        ],
        alias: {
          src: resolve("src")
        }
      }
    }
   
  },
  chainWebpack: config => {
    config.module
      .rule('eslint')
          .exclude
            .add(/public/)
  },
  devServer: {
    open: true,
    host: "0.0.0.0",
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      "/factory": {
        target: "",
        ws: true,
        changOrigin: true
      }
    },
    before: app => {}
  }
};
