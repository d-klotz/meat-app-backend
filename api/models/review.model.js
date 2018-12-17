'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = require('mongodb').ObjectID


var ReviewSchema = new Schema({
  id: {
    type: Number
  },
  name: {
    type: String,
    required: 'Kindly enter the user name.'
  },
  comments: {
    type: String,
    required: 'Kindly enter the comments of review.'
  },
  rating: {
    type: Number,
    required: 'Kindly enter the rating of review.'
  },
  date: {
    type: Date,
    default: Date.now
  },
  restaurant_id: {
    type: ObjectId,
    ref: 'restaurants',
    required: 'Kindly enter the restaurantID of the review.'
  }
});

module.exports = mongoose.model('Review', ReviewSchema);