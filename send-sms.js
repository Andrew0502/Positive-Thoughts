require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;
const client = require("twilio")(accountSid, authToken);
const db = require("./models");

function sendText(message, number) {
  client.messages
    .create({
      from: twilioNumber,
      to: number,
      body: message,
    })
    .then((call) => {
      // console.log(call);
      console.log("Sending....");
    })
    .catch((err) => {
      console.log(err);
    });
}

module.exports = sendText;
