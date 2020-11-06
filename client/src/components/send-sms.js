const accountSid = "AC53df991b77b438e82d02c2c9dc24e9eb";
const authToken = "ea18844c33362da0e49e461578494bde";

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_ACCOUNT_TOKEN;

const client = require('twilio')(accountSid, authToken);
console.log("test");

client.messages.create({
    to: "+14233098896",
    from: "+12513143409",
    body: "test!"
})
.then((message) => console.log(message.sid))
.catch((error) => console.log(error))