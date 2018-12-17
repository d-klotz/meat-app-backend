'use strict';
module.exports = function(app) {
  var meatApp = require('../controllers/restaurant.controller');

  // Restaurant Routes
  app.route('/restaurants')
    .get(meatApp.list_all_restaurants)
    .post(meatApp.create_a_restaurant);


  app.route('/restaurants/:restaurantId')
    .get(meatApp.read_a_restaurant)
    .put(meatApp.update_a_restaurant)
    .delete(meatApp.delete_a_restaurant);
};
