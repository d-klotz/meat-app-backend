'use strict';

module.exports = function(app) {
  var meatApp = require('../controllers/order.controller');

    // Order Routes
  app.route('/api/order')
    .get(meatApp.list_all_orders)
    .post(meatApp.create_an_order);


  app.route('/api/user/:userId/orders')
    .get(meatApp.read_user_orders);
};
