module.exports = {
  outputDir: './cordova-app/www/',
  baseUrl: './',
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: [],
      },
    },
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: false,
    },
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://meal.wcmoon.com/',
        ws: true,
        changeOrigin: true,
      },
    },
  },
};