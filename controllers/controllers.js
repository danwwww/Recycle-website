var mongoose = require('mongoose');
var Items = mongoose.model('items');
var Users = mongoose.model('users');
var Grades = mongoose.model('grades');
var path = require('path');

var createUser = function (req, res) {
    var user = new Users({
        "username":req.body.username,
        "email":req.body.email,
        "passwordHash":req.body.passwordHash
    });
    user.save(function (err, newUsers) {
        if (!err) {
            res.send(newUsers);
        } else {
            res.sendStatus(400);
        }
    });
};

var validateUser = function (req, res) {
    if (req.session && req.session.user) { // Check if session exists
        // lookup the user in the DB by pulling their email from the session
        Users.findOne({ email: req.session.user.email }, function (err, user) {
            if (!user) {
                // if the user isn't found in the DB, reset the session info and
                // redirect the user to the login page
                req.session.reset();
                res.redirect('/');
            } else {
                // expose the user to the template
                res.locals.user = user;

                // render the dashboard page
                res.sendFile(path.join(__dirname, '../views/home.html'));
            }
        });
    } else {
        res.redirect('/');
    }
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

var findAllGrades = function (req, res) {
    Grades.find({}, function (err, grade) {
        if (!err) {
            //console.log(grades);
            res.send(grade);
        } else {
            res.sendStatus(404);
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
    var userName = req.params.username;
    Users.findOne({username: userName}, function (err, user) {
        if (!err) {
            res.send(user);
        } else {
            res.sendStatus(404);
        }
    });
};

var updateUsers = function(req,res){
    Users.findOneAndUpdate({username: req.params.username}, req.body, {new: true}, function(err, user) {
        if (!err) {
            res.send(user)
        }else{
            res.sendStatus(404)
        }
    });
};

var findByEmail = function (req, res) {
    var userEmail = req.params.email;
    Users.findOne({email: userEmail}, function (err, user) {
        if (!err) {
            res.send(user);
        } else {
            res.sendStatus(404);
        }
    });
};

/*var handleLogin = function (req, res) {
        var email = req.body.email;
        Users.findOne({email: email}, function (err, user) {
            if (!err) {
                if (user.passwordHash === req.body.psw){
                    res.send(user);
                }
                else {
                    res.send("wrong password");
                }

            } else {
                res.sendStatus(404);
            }
        });
}; */

var handleLogin = function(req, res) {
    Users.findOne({ email: req.body.email }, function(err, user) {
        if (!user) {
            res.send('Invalid email or password.');
        } else {
            if (req.body.psw === user.passwordHash) {
                req.session.user = user;
                res.redirect('/home');
            } else {
                res.send('Invalid email or password.');
            }
        }
    });
};

var findOneGrade = function (req, res) {
    var userName = req.params.username;
    Grades.findOne({username: userName}, function (err, grade) {
        if (!err) {
            res.send(grade);
        } else {
            res.sendStatus(404);
        }
    });
};

module.exports.createUser = createUser;
module.exports.findAllItems = findAllItems;
module.exports.findOneItem = findOneItem;
module.exports.findByName = findByName;
module.exports.findAllUsers = findAllUsers;
module.exports.findOneUser = findOneUser;
module.exports.findByUserName = findByUserName;
module.exports.updateUsers = updateUsers;
module.exports.createUser = createUser;
module.exports.findByEmail = findByEmail;
module.exports.findAllGrades = findAllGrades;
module.exports.findOneGrade = findOneGrade;
module.exports.handleLogin = handleLogin;
module.exports.validateUser = validateUser;