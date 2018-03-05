const mongoose = require("mongoose");

const pupSchema = new mongoose.Schema({
  title: String,
  breed: String,
  favoriteToy: String
});

mongoose.model("Puppy", pupSchema);

module.exports = mongoose;
