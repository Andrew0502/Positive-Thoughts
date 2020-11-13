require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PromptController = require("./controllers/thoughtControllers");
const UserController = require("./controllers/UserController");
const db = require("./models");
const sendText = require("./send-sms");
const CronJob = require("cron").CronJob;
// const cronFile = require("./cron.js");
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/prompts", PromptController);
app.use("/api/user", UserController);

app.use(express.static("client/build"));

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/positive-thoughts",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
);

const connection = mongoose.connection;

connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
  console.log("Mongoose connection error: ", err);
});

var job = new CronJob(
  // CronJob manual minute hour dayMonth month dayWeek. example: "https://crontab.guru/".
  "* * * * *", // Every Minute
  function () {
    sendMeditation();
    // call a function in here. query all of the users, finding the ones that opted in. Take the users info and send that to the twilio functionality.
  },
  null,
  true,
  "America/New_York"
);

var job2 = new CronJob(
  "*/5 * * * *", // Every 5min
  function () {
    sendThought();
  },
  null,
  true,
  "America/New_York"
);


var job3 = new CronJob(
  "10 * * * *", // Every 10min
  function () {
    sendUplifting();
  },
  null,
  true,
  "America/New_York"
);

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
  });
});

function sendThought() {
  db.Thought.aggregate([{ $sample: { size: 1 } }]).then((sendThoughts) => {
    db.User.find()
      .then((useUsers) => {
        useUsers.forEach((user) =>
          sendText(sendThoughts[0].message_text, user.phoneNumber)
        );
        console.log("thoughtSent");
      })
      .catch(function (err) {
        console.log(err);
      });
  });
}

function sendMeditation() {
  db.Meditation.aggregate([{ $sample: { size: 1 } }]).then(
    (sendMeditations) => {
      db.User.find()
        .then((useUsers) => {
          useUsers.forEach((user) =>
            sendText(sendMeditations[0].message_text, user.phoneNumber)
          );
          console.log("meditationSent");
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  );
}

function sendUplifting() {
  db.UpliftingQuotes.aggregate([{ $sample: { size: 1 } }]).then(
    (sendUplifts) => {
      db.User.find()
        .then((useUsers) => {
          useUsers.forEach((user) =>
            sendText(sendUplifts[0].message_text, user.phoneNumber)
          );
          console.log("UpliftSent");
        })
        .catch(function (err) {
          console.log(err);
        });
    }
  );
}

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  job.start();
  console.log(`App is running on http://localhost:${PORT}`);
});
