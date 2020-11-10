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
<<<<<<< HEAD
// db.thoughts.remove({})
//   .then(() => db.thoughts.collection.insertMany(promptsSeed))
//   .then((data) => {
//     console.log(data.result.n + " records inserted!");
//     process.exit(0);
//   })
//   .catch((err) => {
//     console.error(err);
//     process.exit(1);
//   });
=======

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
>>>>>>> 095b832b1ab094e9082165b1098c850bd3d7bca4
