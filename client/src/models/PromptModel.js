const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  prompt: String,
});

const Messages = mongoose.model("Messages", MessagesSchema);

module.exports = Messages;
