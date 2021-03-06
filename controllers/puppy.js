const express = require("express");
const router = express.Router();
const fileUpload = require("express-fileupload");
const Puppy = require("../models/Puppy");

router.post("/", (req, res) => {
  Puppy.create(req.body).then(puppy => {
    res.redirect("/");
  });
});

router.post("/uploads", function(req, res) {
  if (!req.files) return res.status(400).send("No files uploaded.");
  let sampleFile = req.files.sampleFile;
  sampleFile.mv("/uploads/filename.jpg", function(err) {
    if (err) return res.status(500).send(err);
    res.send("File uploaded!");
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

router.put("/:id", (req, res) => {
  Puppy.findOneAndUpdate({ _id: req.params.id }, req.body).then(Puppy => {
    res.redirect("/");
  });
});

router.delete("/:id", (req, res) => {
  Puppy.findOneAndRemove({ _id: req.params.id }).then(() => {
    res.redirect("/");
  });
});

module.exports = router;
