const Puppy = require("../models/Puppy");

Puppy.remove({}).then(() => {
  Promise.all([
    Puppy.create({
      name: "Storm",
      breed: "Siberian Husky",
      favoriteToy: "Bouncy Ball"
    }),
    Puppy.create({
      name: "Goliath",
      breed: "Golden Retriever",
      favoriteToy: "Stuffed bear named David"
    })
  ]).then(() => {
    console.log("woof");
    process.exit();
  });
});
