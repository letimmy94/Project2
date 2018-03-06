const mongoose = require("../db/connection");

const pupSchema = new mongoose.Schema({
  title: String,
  breed: String,
  favoriteToy: String
});

const Puppy = mongoose.model("Puppy", pupSchema);

module.exports = Puppy;
