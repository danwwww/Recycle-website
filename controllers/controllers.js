var mongoose = require('mongoose');
var Items = mongoose.model('items');
var Users = mongoose.model('users');

var creatItem = function (req, res) {
    var item = new Items({
        "name": req.body.name,
        "description": req.body.description,
        "photo": req.body.photo
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
    Items.find({}, function (err, items) {
        if (!err) {
            //console.log(items);
            res.send(items);
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

var findAllUsers = function (req, res) {
    Users.find({}, function (err, users) {
        if (!err) {
            //console.log(users);
            res.send(users);
        } else {
            res.sendStatus(400);
        }
    });
};

var findOneUser = function (req, res) {
    var userIndex = req.params.id;
    Users.findById(userIndex, function (err, user) {
        if (!err) {
            res.send(user);
        } else {
            res.sendStatus(404);
        }
    });
};

var findByUserName = function (req, res) {
    var userName = req.params.name;
    Users.findOne({name: userName}, function (err, user) {
        if (!err) {
            res.send(user);
        } else {
            res.sendStatus(404);
        }
    });
};

var

module.exports.creatItem = creatItem;
module.exports.findAllItem = findAllItems;
module.exports.findOneItem = findOneItem;
module.exports.findByName = findByName;
module.exports.findAllUser = findAllUsers;
module.exports.findOneUser = findOneUser;
module.exports.findByUserName = findByUserName;