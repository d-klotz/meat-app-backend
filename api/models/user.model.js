'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  id: {
    type: String
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
  address: {
    type: String,
    required: 'Kindly enter the address.'
  },
  number: {
    type: Number,
    required: 'Kindly enter the address number.'
  },
  complement: {
    type: String
  }
});

module.exports = mongoose.model('User', UserSchema);