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

module.exports.findAllItem = findAllItems;