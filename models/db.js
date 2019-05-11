const mongoose = require("mongoose");

//copy from CONNECT (MongoDB Atlas)
const dbURI =
    "mongodb+srv://Ann:a12345678@cluster0-c3ing.mongodb.net/test?retryWrites=true";

const options = {
    useNewUrlParser: true,
    dbName: "INFO30005"
};

mongoose.connect(dbURI, options).then(
    () => {
    console.log("Database connection established!");
},
err => {
    console.log("Error connecting Database instance due to: ", err);
}
);

require('./items.js');