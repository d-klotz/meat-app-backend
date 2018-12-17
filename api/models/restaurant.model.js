'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var RestaurantSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: 'Kindly enter the name of the restaurant.'
  },
  category: {
    type: String,
    required: 'Kindly enter the category of the restaurant.'
  },
  deliveryEstimate: {
    type: String,
    required: 'Kindly enter the delivery estimate of the restaurant.'
  },
  rating: {
    type: String,
    required: 'Kindly enter the rating of the restaurant.'
  },
  imagePath: {
    type: String,
    required: 'Kindly enter the image path of the restaurant.'
  },
  about: {
    type: String,
    required: 'Kindly enter the about of the restaurant.'
  },
  hours: {
    type: String,
    required: 'Kindly enter the opening hours of the restaurant.'
  }
});

module.exports = mongoose.model('Restaurant', RestaurantSchema);