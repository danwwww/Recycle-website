const express = require('express');
var path = require('path');
const router = express.Router();
const bodyParser = require("../node_modules/body-parser");

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

//delete later
var mongoose = require('mongoose');
var Items = mongoose.model('items');
var Users = mongoose.model('users');
var Grades = mongoose.model('grades');

var controller = require('../controllers/controllers.js');

//Create a new user
router.post('/api', controller.createUser);

router.get('/logout', controller.logOut);

router.post('/register', controller.createUser);

router.post('/directory', controller.handleRecycling);

router.get('/directory', controller.getDirectory);

//Find all list items
router.get('/directory/items/api',controller.findAllItems);

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

router.get('/css/landing.css', function(req, res) {
    res.sendFile(path.join(__dirname, '../css/landing.css'));
});
router.get('/css/bootstrap.css', function(req, res) {
    res.sendFile(path.join(__dirname, '../css/bootstrap.css'));
});
router.get('/css/font-awesome.css', function(req, res) {
    res.sendFile(path.join(__dirname, '../css/font-awesome.css'));
});
router.get('/css/head_style.css', function(req, res) {
    res.sendFile(path.join(__dirname, '../css/head_style.css'));
});
router.get('/css/directory.css', function(req, res) {
    res.sendFile(path.join(__dirname, '../css/directory.css'));
});

router.get('/css/lightbox.css', function(req, res) {
    res.sendFile(path.join(__dirname, '../css/lightbox.css'));
});
router.get('/images/recycling_home.jpg', function(req, res) {
    res.sendFile(path.join(__dirname, '../images/recycling_home.jpg'));
});
router.get('/css/home.css', function(req, res) {
    res.sendFile(path.join(__dirname, '../css/home.css'));
});
router.get('/register.html', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/register.html'));
});
router.get('/images/chart.png', function(req, res) {
    res.sendFile(path.join(__dirname, '../images/chart.png'));
});

router.get('/home', controller.validateUser);

router.get('/grade', controller.getGrades);

router.get('/admin', controller.getAdmin);

router.get('/friends', controller.getFriends);

router.get('/account', controller.getAccount);

router.post('/account', controller.updateAccount);

// define the My Account page route
router.get('/account', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/account.html'));
});

module.exports = router;