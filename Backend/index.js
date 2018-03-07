const express = require("express");
const hbs = require("hbs");
const Puppy = require("./models/Puppy");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const cookieParser = require("cookie-parser");
const pupController = require("./controllers/puppy");
const path = require("path");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride("_method"));

app.use(cookieParser());

app.get("/", (req, res) => {
  Puppy.find({}).then(puppys => {
    res.render("index", { puppys });
  });
});

app.use("/puppys", pupController);

app.set("port", process.env.PORT || 4000);

app.listen(app.get("port"), () => {
  console.log(`Reporting for doodie PORT: ${app.get("port")}`);
});
