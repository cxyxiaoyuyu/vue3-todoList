module.exports = {
  devServer: {
    open: true,
    host: 'localhost',
    port: 8080,
    https: false,
    hotOnly: false,
    proxy: {
      '/api': {
        target: 'https://lianghj.top:8888/api/private/v1',
        ws: true,
        changOrigin: true,
        pathRewrite: {
          '^/api': '' 
        }
      } 
    } 
  }
}