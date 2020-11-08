const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/positive-thoughts"
);

const usersSeed = [
    {
        full_name: "Andrew Marcus",
        phone_number: "+14233098896",
        messages: []
    },
    {
        full_name: "Vincent Kendrick",
        phone_number: "+14043371206",
        messages: []
    },
    {
        full_name: "Jamie Jones",
        phone_number: "+1",
        messages: []
    },
    {
        full_name: "Jeff Flynn",
        phone_number: "+1",
        messages: []
    },
]

// db.users.remove({})
//   .then(() => db.users.collection.insertMany(usersSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });