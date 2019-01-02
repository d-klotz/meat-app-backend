'use strict';

module.exports = function (app) {
  var authController = require('./auth.controller');

  // Authentication Routes
  app.route('/login')
    .post(authController.handleAuthentication);

  app.route('/createUser')
    .post(authController.create_new_user);

  app.route('/user/:userId')
  .put(authController.update_an_user)
  .delete(authController.delete_an_user);
}