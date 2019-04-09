const express = require('express');
var path = require('path');
const router = express.Router();
const bodyParser = require("../node_modules/body-parser");

router.use(bodyParser.urlencoded({extended: false}));
router.use(bodyParser.json());

var controller = require('../controllers/controllers.js');

//Find all list items
//router.get('/api',controller.findAllItem);

// define the home page route
router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../views/home.html'));
});

module.exports = router;