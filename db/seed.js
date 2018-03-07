const Puppy = require("../models/Puppy");

Puppy.remove({}).then(() => {
  Promise.all([
    Puppy.create({
      title: "Storm",
      breed: "Siberian Husky",
      favoritetoy: "Bouncy Ball"
    }),
    Puppy.create({
      title: "Goliath",
      breed: "Golden Retriever",
      favoritetoy: "Stuffed bear named David"
    })
  ]).then(() => {
    console.log("woof");
    process.exit();
  });
});
