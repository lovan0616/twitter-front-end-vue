module.exports = {
  // devServer: {
  //   proxy: {
  //     '/vue-socket.io': {
  //       target: 'https://krll-twitter-api-dev.herokuapp.com',
  //       ws: true,
  //       changeOrigin: true
  //     },
  //     'sockjs-node': {
  //       target: 'https://krll-twitter-api-dev.herokuapp.com',
  //       ws: false,
  //       changeOrigin: true
  //     },
  //   }
  // },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/twitter-front-end-vue/'
    : '/'
}