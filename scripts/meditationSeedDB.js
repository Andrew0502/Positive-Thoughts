const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/positive-thoughts"
);

const meditationSeed = [
    {
      message_text: "You have power over your mind - not outside events. Realize this, and you will find strength."
    },
    {
      message_text: "Dwell on the beauty of life. Watch the stars, and see yourself running with them.",
    },
    {
      message_text: "Waste no more time arguing about what a good person should be. Be one.",
    },
    {
      message_text: "The best revenge is to be unlike the one who performed the injury.",
    },
    {
      message_text: "It is not death that a man should fear, but he should fear never beginning to live.",
    },
    {
      message_text: "How much more grievous are the consequences of anger than the causes of it.",
    },
    {
      message_text: "Nothing happens to anybody which he is not fitted by nature to bear.",
    },
    {
      message_text: "Remember that very little is needed to make a happy life.",
    },
    {
      message_text: "Don't go on discussing what a good person should be. Just be one.",
    },
    {
      message_text: "Life is neither good or evil, but only a place for good and evil.",
    },
    {
      message_text: "If any one despises me, that is their problem. My only concern is not doing or saying anything deserving of contempt.",
    },
    {
      message_text: "The memory of everything is very soon overwhelmed in time.",
    },
    {
      message_text: "Be like the cliff against which the waves continually break; but it stands firm and tames the fury of the water around it.",
    },
    {
      message_text: "No one is happy who does not think himself so.",
    },
    {
      message_text: "All things fade and quickly turn to myth.",
    },
    {
      message_text: "Live out your life in truth and justice, tolerant of those who are neither true nor just.",
    },
  ]

    db.Meditation.remove({})
  .then(() => db.Meditation.collection.insertMany(meditationSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
