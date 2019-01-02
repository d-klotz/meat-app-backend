'use strict';

var mongoose = require('mongoose'),
  Order = mongoose.model('Order');
  Menu = mongoose.model('Menu')

exports.list_all_orders = function (req, res) {
  Order.find({}, function (err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};


exports.create_an_order = function (req, res) {
  var new_order = new Order(req.body);
  new_order.save(function (err, order) {
    if (err)
      res.send(err);
    res.json(order);
  });
};


exports.read_user_orders = function (req, res) {
  Order.find({ user: req.params.userId })
    .populate({
        path: 'orderItems.menu', populate: {
          path: 'restaurant_id', select: 'name'
        }
    })
    .exec(function (err, order) {
      if (err) return console.log(err);
      res.json(order);
    });;
};
