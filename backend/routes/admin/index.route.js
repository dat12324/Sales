const dashboard = require('./dashboard.route');
const productRoute = require('./product.route');
const systemCongig = require('../../config/system');

module.exports = (app) => {
  const preFixAdmin = systemCongig.preFixAdmin;
  app.use(preFixAdmin+'/dashboard',dashboard);
  app.use(preFixAdmin+'/products',productRoute);
};