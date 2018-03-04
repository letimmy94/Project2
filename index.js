const express = require("express");
const hbs = require("hbs");
const Puppy = require("./models/Puppy");
const bodyParser = require("body-parser");
const pupController = require("./controllers/puppy");
const app = express();

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  Puppy.find({}).then(puppys => {
    res.render("index", { puppys });
  });
});

app.use("/puppys", pupController);

app.listen(4000, () => {
  console.log("Reporting for doodie port 4000");
});
