const mongoose = require("../db/connection");

const PuppySchema = new mongoose.Schema({
  name: String,
  breed: String,
  favoriteToy: String
});

const Puppy = mongoose.model("Puppy", PuppySchema);

module.exports = Puppy;
