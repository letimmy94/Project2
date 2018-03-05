const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/puppys");
mongoose.Promise = Promise;

module.exports = mongoose;
