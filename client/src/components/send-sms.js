const accountSid = "AC53df991b77b438e82d02c2c9dc24e9eb";
const authToken = "7d03ba852011c5ff998ae78ab56c71de";

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_ACCOUNT_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages.create({
    to: "+14233098896",
    from: "+12513143409",
    body: "Hello World!"
})
.then((message) => console.log(message.sid))