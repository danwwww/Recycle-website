var mongoose = require('mongoose');
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

mongoose.model('items',itemSchema);
mongoose.model('users',userSchema);