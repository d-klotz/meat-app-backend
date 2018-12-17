'use strict';

module.exports = function(app) {
  var meatApp = require('../controllers/order.controller');

    // Order Routes
  app.route('/order')
    .get(meatApp.list_all_orders)
    .post(meatApp.create_an_order);


  app.route('/user/:userId/orders')
    .get(meatApp.read_user_orders);
};
