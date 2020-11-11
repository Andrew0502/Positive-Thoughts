require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const PromptController = require("./controllers/promptControllers");
const UserController = require("./controllers/UserController");
const db = require("./models");
const sendText = require("./send-sms");

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

var CronJob = require("cron").CronJob;
var job = new CronJob(
  "* * * * *",
  function () {
    // Change to time of day.
    console.log("You will see this message every minute"); //Call text users instead.
    sendPrompt();
    // textUsers();
    // call a function in here. query all of the users, finding the ones that opted in. Take the users info and send that to the twilio functionality.
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

// function textUsers() {
//   console.log("anything");
//   db.User.find().then((foundUsers) => {
//     foundUsers.forEach((user) => sendText("Hello There", user.phoneNumber));
//   });
// }
function sendPrompt() {
  console.log("Prompt Loaded");
  db.Prompt.aggregate([{$sample:{size:1}}]).then((sendPrompts) => {
    console.log(sendPrompts);
    db.User.find().then((useUsers) => {
      console.log(useUsers);
      // sendPrompts.forEach((thoughts) => )
      useUsers.forEach((user) => sendText("sendPrompts", user.phoneNumber));
    }).catch(function (err) {
      console.log(err);
    });;
  });
}
// db.Prompt.find which returns array.
// chose one of the array randomly.
// then db.User.find inside of it.
// this is for all users to recieve the same message.
// one query inside the callback of another.

    // let randomPrompt = sendPrompts.sort(() => .5 - Math.random()).slice(0,n)
    // db.Prompt.aggregate([{$sample:{size:1}}]).pretty();
    // const people = useUsers;
    // const randomPrompt = Math.floor(Math.random() * sendPrompts.length);
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.listen(PORT, () => {
  job.start();
  console.log(`App is running on http://localhost:${PORT}`);
});


// function sendPrompt() {
//   console.log("Prompt Loaded");
//   // db.Prompt.aggregate([{$sample:{size:1}}]).then((prompts) => {
//     db.Prompt.find().then((prompts) => {
//       console.log(prompts);
//       for (var i = 0; i < thoughts.length; i++) {
//         // if (prompts === thoughts[i].message_text) {
//         //   return thoughts[i];
//         // }
//           return thoughts;
          
//       }
//     }