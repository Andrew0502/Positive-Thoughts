require("dotenv").config();
const express = require("express"),
  mongoose = require("mongoose"),
  path = require("path"),
  PromptController = require("./controllers/thoughtControllers"),
  UserController = require("./controllers/UserController"),
  db = require("./models"),
  sendText = require("./send-sms"),
  CronJob = require("cron").CronJob,
  PORT = process.env.PORT || 3001,
  app = express();
app.use(express.urlencoded({ extended: !0 })),
  app.use(express.json()),
  app.use(express.static("client/build"));

app.get("/job/:value", (a, b) => {
  console.log(a.params.value),
    a.params.value
      ? (meditationJob.start(),
        thoughtJob.start(),
        upliftingJob.start(),
        b.json({ success: !0 }))
      : (meditationJob.stop(),
        thoughtJob.stop(),
        upliftingJob.stop(),
        b.json({ success: !1 }));
}),
  app.use("/api/user", UserController);
// jobs run automatically. if you run localhost:3001/job/0 they will turn off. Running localhost:3001/job/1 will turn them back on.

app.use("/api/prompts", PromptController),
  app.use("/api/user", UserController),
  mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/positive-thoughts",
    {
      useNewUrlParser: !0,
      useUnifiedTopology: !0,
      useCreateIndex: !0,
      useFindAndModify: !1,
    }
  );
const connection = mongoose.connection;
connection.on("connected", () => {
  console.log("Mongoose successfully connected.");
}),
  connection.on("error", (a) => {
    console.log("Mongoose connection error: ", a);
  });

var meditationJob = new CronJob(
    "* * * * *",
    function () {
      sendMeditation();
    },
    null,
    !0,
    "America/New_York"
  ),
  thoughtJob = new CronJob(
    "*/5 * * * *",
    function () {
      sendThought();
    },
    null,
    !0,
    "America/New_York"
  ),
  upliftingJob = new CronJob(
    "*/10 * * * *",
    function () {
      sendUplifting();
    },
    null,
    !0,
    "America/New_York"
  );
app.get("/api/config", (a, b) => {
  b.json({ success: !0 });
});
function sendThought() {
  db.Thought.aggregate([{ $sample: { size: 1 } }]).then((a) => {
    db.User.find()
      .then((b) => {
        b.forEach((b) => sendText(a[0].message_text, b.phoneNumber)),
          console.log("thoughtSent");
      })
      .catch(function (a) {
        console.log(a);
      });
  });
}
function sendMeditation() {
  db.Meditation.aggregate([{ $sample: { size: 1 } }]).then((a) => {
    db.User.find()
      .then((b) => {
        b.forEach((b) => sendText(a[0].message_text, b.phoneNumber)),
          console.log("meditationSent");
      })
      .catch(function (a) {
        console.log(a);
      });
  });
}
function sendUplifting() {
  db.UpliftingQuotes.aggregate([{ $sample: { size: 1 } }]).then((a) => {
    db.User.find()
      .then((b) => {
        b.forEach((b) => sendText(a[0].message_text, b.phoneNumber)),
          console.log("UpliftSent");
      })
      .catch(function (a) {
        console.log(a);
      });
  });
}
app.get("*", (a, b) => {
  b.sendFile(path.join(__dirname, "./client/build/index.html"));
}),
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
