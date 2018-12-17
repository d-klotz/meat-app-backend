'use strict';

module.exports = function(app) {
  var meatApp = require('../controllers/menu.controller');

    // Menu Routes
  app.route('/menu')
    .get(meatApp.list_all_menus)
    .post(meatApp.create_a_menu);


  app.route('/restaurants/:restaurantId/menu')
    .get(meatApp.read_a_restaurant_menu);


  app.route('/restaurants/:restaurantId/menu')
    .put(meatApp.update_a_menu)
    .delete(meatApp.delete_a_menu);
};
