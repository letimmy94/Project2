const mongoose = require("../db/connection");

const PuppySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  favoritetoy: {
    type: String,
    required: true
  }
});

const Puppy = mongoose.model("Puppy", PuppySchema);

module.exports = Puppy;
