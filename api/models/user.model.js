'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: 'Kindly enter the name.'
  },
  email: {
    type: String,
    required: 'Kindly enter the email.'
  },
  password: {
    type: String,
    required: 'Kindly enter the password.'
  },
});

module.exports = mongoose.model('User', UserSchema);