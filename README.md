# Meat App Backend NodeJS

NodeJS backend build to serve the REST APIs for the project [meat-app-angular](https://github.com/d-klotz/meat-app-angular).

## Requirements

To compile and run this project you will need:

* [NodeJS](https://nodejs.org/)
* [MongoDB](https://www.mongodb.com/) or latest

## 1. First steps

### Installing NodeJS dependencies

`npm install`

### Restore the database if you want to have some example content

In the command line execute `mongorestore.exe <project directory>/meat-app-nodejs/backup-meat-app` in the mongodb directory.

If you are going to host your database somewhere but local, you need to change the connection string in the server.js file.

### Starting the application

`node server`

### Application endpoints

* GET and POST /restaurants
* GET, PUT and DELETE /restaurants/:restaurantId
* GET and POST /menu
* GET /restaurants/:restaurantId/menu
* PUT and DELETE /restaurants/:restaurantId/menu
* GET and POST /order
* GET /user/:userId/orders
* GET and POST /review
* GET /restaurants/:restaurantId/reviews
* PUT and DELETE /restaurants/:restaurantId/review