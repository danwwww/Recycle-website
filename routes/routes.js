const express = require('express');
var path = require('path');
const router = express.Router();

var controller = require('../controllers/controllers.js');

//Create a new item
router.post('/api', controller.creatItem);

//Find all list items
router.get('/directory.html/api',controller.findAllItem);

//find list item by id
router.get('/items/id/:id',controller.findOneItem);

//find list item by name
router.get('/items/name/:name',controller.findByName);

//find all users
router.get('/users/api',controller.findAllUser);

//find user by id
router.get('/users/id/:id',controller.findOneUser);

//find user by name
router.get('/users/name/:name',controller.findByUserName);

// define the home page route
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

// define the My Account page route
router.get('/account', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/account.html'));
});

module.exports = router;