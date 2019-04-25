const express = require('express');
const app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const PORT = process.env.PORT || 3000;
app.use(express.static('views'));
app.use(__dirname + '/css', express.static('css'));
app.use(__dirname + '/images', express.static('images'));

// Database setup
require('./models/db.js');

// Routes setup
var routes = require('./routes/routes.js');
app.use('/',routes);

// Start the server
app.listen(PORT, function(){
});console.log(`Express listening on port ${PORT}`);