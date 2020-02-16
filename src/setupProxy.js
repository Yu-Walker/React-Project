const proxy = require('http-proxy-middleware');
module.exports = function(app) {
  app.use(
    '/ajax',
    proxy({
      target: 'https://m.maoyan.com/',
      changeOrigin: true,
    })
  );
};

// http://m.maoyan.com/ajax/movieOnInfoList?token=&optimus_uuid=516556104FFC11EA95E4CD778196F3C36C38CF998CC84EC981CF5D343DA109BD&optimus_risk_level=71&optimus_code=10