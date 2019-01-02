'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID


var MenuSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the menu item.'
  },
  description: {
    type: String,
    required: 'Kindly enter the description of the menu item.'
  },
  price: {
    type: Number,
    required: 'Kindly enter the number estimate of the menu item.'
  },
  restaurant_id: {
    type: ObjectId,
    ref: 'Restaurant',
    required: 'Kindly enter the restaurantID of the menuItem.'
  },
  imagePath: {
    type: String,
    required: 'Kindly enter the image path of the menu item.'
  }
});

module.exports = mongoose.model('Menu', MenuSchema);