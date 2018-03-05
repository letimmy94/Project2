const express = require("express");
const router = express.Router();
const Puppy = require("../models/Puppy");

router.post("/", (req, res) => {
  Puppy.create(req.body).then(puppy => {
    res.redirect(`/puppys/${puppy.id}`);
  });
});

router.get("/new", (req, res) => {
  res.render("puppys/new");
});

router.get("/:id", (req, res) => {
  Puppy.findOne({ _id: req.params.id }).then(puppy => {
    res.render("puppys/show", puppy);
  });
});

module.exports = router;
