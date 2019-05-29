var mongoose = require("mongoose");
require('mongoose-type-url');
var itemSchema = mongoose.Schema(
    {
        "name":String,
        "category":String,
        "method":String,
        "photo":mongoose.SchemaTypes.Url
    }
);

var userSchema = mongoose.Schema(
    {
        "username":{
            type: String,
            required: true
        },
        "email": {
            type: String,
            required: true,
        },
        "passwordHash": {
            type: String,
            required: true
        },
        "friends": {
            type: Array,
            required: true
        },
        "grade": {
            type: Array,
            required: true
        },
        "isAdmin": {
            type: Boolean,
            required: true
        }
    }
);

var gradeSchema = mongoose.Schema(
    {
        "username": String,
        "score": String
    }
)

module.exports = mongoose.model('items', itemSchema);
module.exports = mongoose.model('users', userSchema);
module.exports = mongoose.model('grades', gradeSchema);