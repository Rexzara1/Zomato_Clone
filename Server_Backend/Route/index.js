const express = require("express");

const locationController = require("../Controller/location");
const restaurantController = require("../Controller/restuarant");
const mealtypeController = require("../Controller/mealtype");
const userController = require("../Controller/user");
const menuController = require("../Controller/menu");

const route = express.Router();

route.get('/location', locationController.getLocation);
route.get('/rest/:locId', restaurantController.getRestaurantByLocationId);
route.get('/mealtype', mealtypeController.getMealtype);
route.get('/mealtype/:name', mealtypeController.getMealtypeByName);
route.post('/signup', userController.postSignUp);
route.post('/login', userController.postlogin);
route.get('/restaurants/:id', restaurantController.getRestaurantById);
route.get('/mealtypes/:id', mealtypeController.getMealtypeById);
route.get('/menu/:resId', menuController.getMenuByRestaurantId);

//Filter

route.get('/restaurant', restaurantController.getRestaurant);
route.post('/filter', restaurantController.filterRestuarant);
module.exports = route;