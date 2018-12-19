'use strict';

module.exports = function (app) {
  var authController = require('./auth.controller');

  // Authentication Routes
  app.route('/login')
    .post(authController.handleAuthentication);

  app.route('/createUser')
    .post(authController.create_new_user);
}