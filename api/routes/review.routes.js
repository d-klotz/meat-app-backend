'use strict';

module.exports = function(app) {
  var meatApp = require('../controllers/review.controller');

    // Review Routes
  app.route('/review')
    .get(meatApp.list_all_reviews)
    .post(meatApp.create_a_review);


  app.route('/restaurants/:restaurantId/reviews')
    .get(meatApp.read_restaurant_reviews);


  app.route('/restaurants/:restaurantId/review')
    .put(meatApp.update_a_review)
    .delete(meatApp.delete_a_review);
};
