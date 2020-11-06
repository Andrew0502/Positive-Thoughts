require ("dotenv").config()
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_ACCOUNT_TOKEN;
// const client = require('twilio')(accountSid, authToken);

console.log("test");

// client.messages.create({
//     to: "+14233098896",
//     from: "+12513143409",
//     body: "test!"
// })
// .then((message) => console.log(message.sid))
// .catch((error) => console.log(error))