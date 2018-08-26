const path = require('path')

module.exports = {
  configureWebpack: config => {
    return (config = {
      resolve: {
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
          images: path.resolve(__dirname, 'src/assets/images')
        }
      }
    })
  },
  devServer: {
    overlay: true,
    open: true
  }
}
