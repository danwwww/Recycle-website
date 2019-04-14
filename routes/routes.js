const express = require('express');
var path = require('path');
const router = express.Router();

var controller = require('../controllers/controllers.js');

//Create a new user
router.post('/login.html/api', controller.createUser);

//Find all list items
router.get('/items/api',controller.findAllItems);

//find list item by id
router.get('/items/id/:id',controller.findOneItem);

//find list item by name
router.get('/items/name/:name',controller.findByName);

//find all users
router.get('/users/api',controller.findAllUsers);

//find user by id
router.get('/users/id/:id',controller.findOneUser);

//find user by username
router.get('/users/username/:username',controller.findByUserName);

//find user by email
router.get('/users/email/:email',controller.findByEmail);

//update a user's information
router.put('/user/id/:id',controller.updateUsers);

// define the home page route
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

// define the My Account page route
router.get('/account', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/account.html'));
});

module.exports = router;