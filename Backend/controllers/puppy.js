const express = require("express");
const router = express.Router();
const Puppy = require("../models/Puppy");

router.post("/", (req, res) => {
  Puppy.create(req.body).then(puppy => {
    res.redirect(`/puppies/${puppy.id}`);
  });
});

router.get("/new", (req, res) => {
  res.render("puppys/new");
});

router.get("/edit/:id", (req, res) => {
  Puppy.findOne({ _id: req.params.id }).then(puppy => {
    res.render("puppys/edit", puppy);
  });
});

//
router.put("/:id", (req, res) => {
  Puppy.findOneAndUpdate({ _id: req.params.id }, req.body).then(puppy => {
    res.redirect("/");
  });
});

router.delete("/:id", (req, res) => {
  Puppy.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
