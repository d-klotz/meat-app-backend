'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID

const paymentOption = Object.freeze({
    Dinheiro: 'MON',
    Debito: 'DEB',
    Refeicao: 'REF',
});


var Orderschema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: 'Kindly enter the user name.'
  },
  email: {
    type: String,
    required: 'Kindly enter the user email.'
  },
  emailConfirmation: {
    type: String,
    required: 'Kindly enter the same email.'
  },
  address: {
    type: String,
    required: 'Kindly enter the address.'
  },
  number: {
    type: Number,
    required: 'Kindly enter the address number.'
  },
  optionalAddress: {
    type: String,
  },
  paymentOption: {
    type: String,
    enum: Object.values(paymentOption),
    required: 'Kindly enter the payment option.'
  },
  orderItems: [
    {
        quantity: {
            type: Number,
            required: 'Kindly enter the quantity.',
        },
        menu_id: {
            type: ObjectId,
            ref: 'menus',
            required: 'Kindly enter the menu item.'
        },
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  user_id: {
    type: ObjectId,
    ref: 'users'
  }
});

module.exports = mongoose.model('Order', Orderschema);