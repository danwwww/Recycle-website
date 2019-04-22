var User = {

    current: "",

    setUser: function(Useremail) {
        User.current = Useremail;
        console.log("user = ", User.current);
    },

    getUser: function () {
        console.log("user = ", User.current);
        return User.current;
    },

}

module.exports(User);