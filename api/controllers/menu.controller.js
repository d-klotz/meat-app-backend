'use strict';

var mongoose = require('mongoose'),
  Menu = mongoose.model('Menu');

exports.list_all_menus = function(req, res) {
    Menu.find({}, function(err, menu) {
        if (err)
        res.send(err);
        res.json(menu);
    });
};


exports.create_a_menu = function(req, res) {
  var new_menu = new Menu(req.body);
  new_menu.save(function(err, menu) {
    if (err)
      res.send(err);
    res.json(menu);
  });
};


exports.read_a_restaurant_menu = function(req, res) {
    Menu.find({restaurant_id: req.params.restaurantId}, function(err, menu) {
        if (err)
        res.send(err);
        res.json(menu);
    });
};


exports.update_a_menu = function(req, res) {
    Menu.findOneAndUpdate({_id: req.params.menuId}, req.body, {new: true}, function(err, menu) {
        if (err)
        res.send(err);
        res.json(menu);
    });
};


exports.delete_a_menu = function(req, res) {
    Menu.remove({
        _id: req.params.menuId
        }, function(err, menu) {
        if (err)
            res.send(err);
        res.json({ message: 'Menu successfully deleted' });
    });
};
