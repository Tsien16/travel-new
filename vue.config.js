/**
 * Created with WebStorm.
 * @author tsi en
 * @version 1.0.0
 * @date 2019/8/18 0018 15:33
 */


module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
      },
    },
  },


  devServer: {
    port: 3000,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/mock',
        },
      },
    },
  },
};
