var mongoose = require("mongoose");
var itemSchema = mongoose.Schema(
    {
        "name":String,
        "description":String,
        "photo":String
    }
);

var userSchema = mongoose.Schema(
    {
        "name": String,
        "firstname": {
            type: String,
            required: false
        },
        "lastname": {
            type: String,
            required: false
        },
        "username":{
            type: String,
            required: true
        },
        "email": {
            type: String,
            required: true
        },
        "passwordHash": {
            type: String,
            required: true
        }
    }
);

module.exports = mongoose.model('items', itemSchema);
module.exports = mongoose.model('users', userSchema);