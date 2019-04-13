var mongoose = require('mongoose');
var itemSchema = mongoose.Schema(
    {
        "name":String,
        "description":String,
        "photo":String
    }
);
mongoose.model('items',itemSchema);