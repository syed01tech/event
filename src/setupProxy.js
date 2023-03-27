const {createProxyMiddleware} = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(createProxyMiddleware('/apis/',
    {
        target: "https://event-app.01tech.hk/",
        changeOrigin: true,
        pathRewrite: { '^/apis/': '' }
    }))
}