const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/positive-thoughts"
);

const promptsSeed = [
  {
    message_text: "Smell the flowers🌻",
  },
  {
    message_text: "Draw something you like! It doesn't have to amazing, just do it!",
  },
  {
    message_text: "Go out and take pictures of mushrooms! 🍄🍄🍄",
  },
  {
    message_text: "Play a video game! 🎮🕹",
  },
  {
    message_text: "Join a Discord server of your interest!",
  },
  {
    message_text: "Buy and build a Lego set!",
  },
  {
    message_text: "Solve a puzzle! 🧩",
  },
  {
    message_text: "Go for a walk/hike!",
  },
  {
    message_text: "Write three positive things about your week! No matter how little it may have been!",
  },
  {
    message_text: "Write about your day in a journal! 🖋📔",
  },
  {
    message_text: "Start reading a book! 📚",
  },
  {
    message_text: "Bake a cake of other dessert! Yum!! 🍰",
  },
  {
    message_text: "Have a DANCE PARTY!! 💃🕺",
  },
  {
    message_text: "Invite a friend over!",
  },
  {
    message_text: "Cook yourself your favorite meal! 🧆",
  },
  {
    message_text: "Turn your phone 📴 off for the rest of the day!",
  },
  {
    message_text: "Watch a movie! 🍿🎞",
  },
  {
    message_text: "Plan a weekend out for camping! 🏕",
  },
  {
    message_text: "Go for a bike ride! 🚵‍♂️🚵‍♀️",
  },
]

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

]

db.Prompt.remove({})
  .then(() => db.Prompt.collection.insertMany(promptsSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });
