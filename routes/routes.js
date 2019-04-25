const express = require('express');
var path = require('path');
const router = express.Router();

//delete later
var mongoose = require('mongoose');
var Items = mongoose.model('items');
var Users = mongoose.model('users');
var Grades = mongoose.model('grades');

var controller = require('../controllers/controllers.js');

//Create a new user
router.post('/api', controller.createUser);

//Find all list items
router.get('/items/api',controller.findAllItems);

//find list item by id
router.get('/items/id/:id',controller.findOneItem);

//find list item by name
router.get('/items/name/:name',controller.findByName);

//find all users
router.get('/api',controller.findAllUsers);
router.get('/landing.html/api',controller.findAllUsers);

//find user by id
router.get('/users/id/:id',controller.findOneUser);

//find user by username
router.get('/users/username/:username',controller.findByUserName);

//handle login logic
router.post('/login', controller.handleLogin);

//find user by email
router.get('/users/email/:email',controller.findByEmail);

//update a user's information
router.put('/users/username/:username',controller.updateUsers);

router.post('/', controller.createUser);

//find all users' grade
router.get('/grades/api',controller.findAllGrades);

//find user's grade by username
router.get('/grades/:username',controller.findOneGrade);

// define the home page route
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/landing.html'));
});
router.get('/register.html', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/register.html'));
});

// define the My Account page route
router.get('/account', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/account.html'));
});

module.exports = router;