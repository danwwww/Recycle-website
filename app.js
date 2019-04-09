const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;
app.use(express.static('views'));
app.use('/css', express.static('css'));
app.use('/images', express.static('images'));

// Database setup
//require('./models/database.js');

// Routes setup
var routes = require('./routes/routes.js');
app.use('/',routes);

// Start the server
app.listen(PORT, function(){
});console.log(`Express listening on port ${PORT}`);