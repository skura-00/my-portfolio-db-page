const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/select',
    createProxyMiddleware({
      target: 'https://db-page-practice-0f7c8e4a291d.herokuapp.com/',
      changeOrigin: true,
    })
  );
};