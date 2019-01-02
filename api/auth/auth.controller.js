'use strict';

var jwt = require('jsonwebtoken');
var apiConfig = require('../api-config');
var mongoose = require('mongoose');
User = mongoose.model('User');

exports.handleAuthentication = function (req, res) {
    const user = req.body;

    if (user) {
        User.findOne({ email: user.email, password: user.password }, function (err, dbUser) {
            if (err) throw err;
            if (dbUser) {

                /**
                 * Creating JWT token and passing it in the response below
                 */
                const token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, apiConfig.secret)

                res.json({ id: dbUser._id,
                            name: dbUser.name, 
                            email: dbUser.email, 
                            address: dbUser.address, 
                            number: dbUser.number,  
                            complement: dbUser.complement, 
                            accessToken: token
                        })

            } else {
                res.status(403).json({ message: 'Invalid credencials.' });
            }
        })
    } else {
        res.status(403).json({ message: 'Invalid credencials.' });
    }
};

exports.create_new_user = function (req, res) {
    var new_user = new User(req.body);
    new_user.save(function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
};

exports.update_an_user = function (req, res) {
    User.findOneAndUpdate({ _id: req.params.userId }, req.body, { new: true }, function (err, user) {
        if (err)
            res.send(err);
        res.json(user);
    });
  };
  
  
  exports.delete_an_user = function (req, res) {
    User.find({ user_id: req.params.userId }, function (err, user) {
      if (err)
        res.send(err);
      res.status(200);
    });
  };