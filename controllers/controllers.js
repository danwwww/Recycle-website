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

module.exports.findAllItem = findAllItems;
module.exports.findOneItem = findOneItem;