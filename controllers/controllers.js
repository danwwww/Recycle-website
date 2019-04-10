//var mongoose = require('mongoose');
//var Item = mongoose.model('items');

var creatItem = function (req, res) {
    var item = new Items({
        "name": req.body.name,
        "description": req.body.description,
    });
    item.save(function (err, newItems) {
        if (!err) {
            res.send(newItems);
        } else {
            res.sendStatus(400);
        }
    });
};

var findAllItems = function (req, res) {
    Items.find({}, function (err, lists) {
        if (!err) {
            //console.log(lists);
            res.send(lists);
        } else {
            res.sendStatus(400);
        }
    });
};

var findOneItem = function (req, res) {
    var itemIndex = req.params.id;
    Items.findById(itemIndex, function (err, item) {
        if (!err) {
            res.send(item);
        } else {
            res.sendStatus(404);
        }
    });
};

var findByName = function (req, res) {
    var itemName = req.params.name;
    Items.findOne({name: itemName}, function (err, item) {
        if (!err) {
            res.send(item);
        } else {
            res.sendStatus(404);
        }
    });
};

module.exports.creatItem = creatItem;
module.exports.findAllItem = findAllItems;
module.exports.findOneItem = findOneItem;
module.exports.findByName = findByName;