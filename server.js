var express = require('express')

app = express(),
port = process.env.PORT || 3000;

mongoose = require('mongoose'),

Restaurant = require('./api/models/restaurant.model'),
Menu = require('./api/models/menu.model'),
Review = require('./api/models/review.model');
Order = require('./api/models/order.model');

bodyParser = require('body-parser');


// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/meatdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var restaurantRoutes = require('./api/routes/restaurant.routes'); //importing restaurant routes
restaurantRoutes(app); //registering the restaurant routes

var menuRoutes = require('./api/routes/menu.routes'); //importing menu routes
menuRoutes(app); //registering the menu routes

var reviewRoutes = require('./api/routes/review.routes'); //importing review routes
reviewRoutes(app); //registering the review routes

var orderRoutes = require('./api/routes/order.routes'); //importing order routes
orderRoutes(app); //registering the order routes

app.listen(port);

console.log('meat-app RESTful API server started on: ' + port);