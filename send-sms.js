require("dotenv").config();
const accountSid = process.env.TWILIO_ACCOUNT_SID,
  authToken = process.env.TWILIO_ACCOUNT_TOKEN,
  twilioNumber = process.env.TWILIO_PHONE_NUMBER,
  client = require("twilio")(accountSid, authToken),
  db = require("./models");
function sendText(a, b) {
  client.messages
    .create({ from: twilioNumber, to: b, body: a })
    .then(() => {
      console.log("\uD83D\uDC83\uD83D\uDD7A");
    })
    .catch((a) => {
      console.log(a);
    });
}
module.exports = sendText;
