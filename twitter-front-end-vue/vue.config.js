module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/twitter-front-end-vue/'
    : '/',
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/sass/variables.sass";`,
        additionalData: `@import "~@/assets/sass/mixin.sass";`,
      },
    }
  }
}
