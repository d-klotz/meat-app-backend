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

In the command line execute `mongorestore.exe <project directory>/backup-meat-app` in the mongodb directory.

If you are going to host your database somewhere but local, you need to change the connection string in the server.js file.

### Starting the application

`node server`

## 2. Application endpoints

### Authentication endpoints

* POST /login with payload below

`{
      "email": "admin@admin.com",
      "password": "123"
 }`

 * POST /createUser

### Protected endpoints

To access these APIs, you have to pass the generated JWT token in headers of the requests, like below:

`{
      Authorization: Bearer <generated token>
 }`

* GET and POST /api/restaurants
* GET, PUT and DELETE /api/restaurants/:restaurantId
* GET and POST /api/menu
* GET /api/restaurants/:restaurantId/menu
* PUT and DELETE /api/restaurants/:restaurantId/menu
* GET and POST /api/order
* GET /api/user/:userId/orders
* GET and POST /api/review
* GET /api/restaurants/:restaurantId/reviews
* PUT and DELETE /api/restaurants/:restaurantId/review