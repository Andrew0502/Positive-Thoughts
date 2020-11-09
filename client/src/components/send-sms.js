require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require("twilio")(accountSid, authToken);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

console.log("test");

app.post("/api/thoughts", (req, res) => {
  res.header("Content-Type", "application/json");
  client.messages
    .create({
      from: process.env.TWILIO_PHONE_NUMBER,
      to: "+14233098896",
      body: "test!"
    //   to: req.body.to,
    //   body: req.body.body,
    })
    .then(() => {
      res.send(JSON.stringify({ success: true }));
    })
    .catch((err) => {
      console.log(err);
      res.send(JSON.stringify({ success: false }));
    });
});

app.get("/api/prompts", (req, res) => {
  const name = req.query.name || "World";
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

app.listen(3001, () =>
  console.log("Express server is running on localhost:3001")
);







// client.messages.create({
//     to: "+14233098896",
//     from: "+12513143409",
//     body: "test!"
// })
// .then((message) => console.log(message.sid))
// .catch((error) => console.log(error))