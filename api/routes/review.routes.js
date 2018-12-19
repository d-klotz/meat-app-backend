'use strict';

module.exports = function(app) {
  var meatApp = require('../controllers/review.controller');

    // Review Routes
  app.route('/api/review')
    .get(meatApp.list_all_reviews)
    .post(meatApp.create_a_review);


  app.route('/api/restaurants/:restaurantId/reviews')
    .get(meatApp.read_restaurant_reviews);


  app.route('/api/restaurants/:restaurantId/review')
    .put(meatApp.update_a_review)
    .delete(meatApp.delete_a_review);
};
