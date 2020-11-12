const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/positive-thoughts"
);

const upliftingQuotesSeed = [
  {
    message_text:
      "Optimism is the one quality more associated with success and happiness than any other. — Brian Tracy",
  },
  {
    message_text:
      "Always keep your eyes open. Keep watching. Because whatever you see can inspire you. — Grace Coddington",
  },
];

db.UpliftingQuotes.remove({})
  .then(() => db.UpliftingQuotes.collection.insertMany(upliftingQuotesSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
