const mongoose = require("mongoose"),
  db = require("../models");
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/positive-thoughts"
);
const upliftingQuotesSeed = [
  {
    message_text:
      "Optimism is the one quality more associated with success and happiness than any other. \u2014 Brian Tracy",
  },
  {
    message_text:
      "Always keep your eyes open. Keep watching. Because whatever you see can inspire you. \u2014 Grace Coddington",
  },
  {
    message_text:
      "There is no way to happiness. Happiness is the way. \u2014 Thich Nhat Hanh",
  },
  {
    message_text:
      "Champions keep playing until they get it right. \u2014 Billie Jean King",
  },
  {
    message_text:
      "A comfort zone is a beautiful place, but nothing ever grows there. \u2014 Author Unknown",
  },
  {
    message_text:
      "You must be the change you wish to see in the world. \u2014 Mahatma Gandhi",
  },
  {
    message_text:
      "Numbing the pain for a while will only make it worse when you finally feel it. \u2014 Albus Dumbledore",
  },
  {
    message_text:
      "If you want to live a happy life, tie it to a goal, not to people or objects. \u2014 Albert Einstein",
  },
  {
    message_text:
      "Never give up on a dream just because of the time it will take to accomplish it. The time will pass anyway. \u2014 Earl Nightingale",
  },
];
db.UpliftingQuotes.remove({})
  .then(() => db.UpliftingQuotes.collection.insertMany(upliftingQuotesSeed))
  .then((a) => {
    console.log(a.result.n + " records inserted!"), process.exit(0);
  })
  .catch((a) => {
    console.error(a), process.exit(1);
  });