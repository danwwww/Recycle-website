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