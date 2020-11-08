const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/positive-thoughts"
);

const quotesSeed = [
  {
    message_text:
      "It's not whether you get knocked down, it's wether you get up. - Vince Lombardi",
  },
  {
    message_text:
      "Do the best that you can. That is the most you can expect of yourself.",
  },
  {
    message_text: "Never give up hope, no matter how dark things may seem.",
  },
  {
    message_text:
      "Trust in your friends, and they’ll have reason to trust in you.",
  },
  {
    message_text: "The best confidence builder is experience.",
  },
  {
    message_text:
      "The winding path to peace is always a worthy one, regardless of how many turns it takes.",
  },
  {
    message_text: "It is a rough road that leads to the heights of greatness.",
  },
  {
    message_text: "Believe in yourself or no one else will.",
  },
  {
    message_text: "A wise leader knows when to follow.",
  },
  {
    message_text: "Where there’s a will, there’s a way.",
  },
  {
    message_text: "Love comes in all shapes and sizes.",
  },
  {
    message_text: "Only through fire is a strong sword forged.",
  },
  {
    message_text: "One must let go of the past to hold on to the future.",
  },
  {
    message_text: "When all seems hopeless, a true hero gives hope.",
  },
  {
    message_text: "Courage begins by trusting oneself.",
  },
  {
    message_text: "When in doubt, go to the source.",
  },
  {
    message_text: "The wise benefit from a second opinion.",
  },
  {
    message_text:
      "You have power over your mind - not outside events. Realize this, and you will find strength. -Marcus Aurelius",
  },
  {
    message_text:
      "Dwell on the beauty of life. Watch the stars, and see yourself running with them. -Marcus Aurelius",
  },
  {
    message_text:
      "The happiness of your life depends upon the quality of your thoughts. -Marcus Aurelius",
  },
  {
    message_text:
      "Waste no more time arguing about what a good person should be. Be one. -Marcus Aurelius",
  },
  {
    message_text:
      "If you are distressed by anything external, the pain is not due to the thing itself, but to your estimate of it; and this you have the power to revoke at any moment. -Marcus Aurelius",
  },
  {
    message_text:
      "When you arise in the morning think of what a privilege it is to be alive, to think, to enjoy, to love ... -Marcus Aurelius",
  },
  {
    message_text:
      "The best revenge is to be unlike they who performed the injury. -Marcus Aurelius",
  },
  {
    message_text:
      "Accept the things to which fate binds you, and love the people with whom fate brings you together,but do so with all your heart. -Marcus Aurelius",
  },
  {
    message_text:
      "It is not death that a person should fear, but they should fear never beginning to live. -Marcus Aurelius",
  },
  {
    message_text:
      "Very little is needed to make a happy life; it is all within yourself in your way of thinking. -Marcus Aurelius",
  },
  {
    message_text:
      "The object of life is not to be on the side of the majority, but to escape finding oneself in the ranks of the insane. -Marcus Aurelius",
  },
  {
    message_text:
      "The best revenge is not to be like your enemy. -Marcus Aurelius",
  },
  {
    message_text:
      "The first rule is to keep an untroubled spirit. The second is to look things in the face and know them for what they are. -Marcus Aurelius",
  },
  {
    message_text:
      "How much more grievous are the consequences of anger than the causes of it. -Marcus Aurelius",
  },
  {
    message_text:
      "You always own the option of having no opinion. There is never any need to get worked up or to trouble your soul about things you can't control. These things are not asking to be judged by you. Leave them alone. -Marcus Aurelius",
  },
];

db.thoughts.remove({})
  .then(() => db.thoughts.collection.insertMany(quotesSeed))
  .then((data) => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });