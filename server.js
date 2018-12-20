var express = require('express');
var cors = require('cors');

app = express();
port = process.env.PORT || 3000;

mongoose = require('mongoose');

Restaurant = require('./api/models/restaurant.model'),
Menu = require('./api/models/menu.model'),
Review = require('./api/models/review.model');
Order = require('./api/models/order.model');
User = require('./api/models/user.model');

bodyParser = require('body-parser');
authorization = require('./api/authz/authz.controller');


//Acts as a middleware to handle CORS Errors
app.use((req, res, next) => { //doesn't send response just adjusts it
    res.header("Access-Control-Allow-Origin", "*") //* to give access to any origin
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization" //to give access to all the headers provided
    );
    if(req.method === 'OPTIONS'){
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET'); //to give access to all the methods provided
        return res.status(200).json({});
    }
    next(); //so that other routes can take over
})

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/meatdb');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Protected routes
app.use('/api/order', authorization.handleAuthorization);

//importing routes
var restaurantRoutes = require('./api/routes/restaurant.routes'); 
var menuRoutes = require('./api/routes/menu.routes');
var reviewRoutes = require('./api/routes/review.routes');
var orderRoutes = require('./api/routes/order.routes');
var authRoutes = require('./api/auth/auth.routes');

//registering the routes
restaurantRoutes(app); 
menuRoutes(app);
reviewRoutes(app);
orderRoutes(app);
authRoutes(app);

app.listen(port);

console.log('meat-app RESTful API server started on: ' + port);