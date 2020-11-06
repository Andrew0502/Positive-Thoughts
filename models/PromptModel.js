const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const MessagesSchema = new Schema({
  prompt: String,
});

const Messages = mongoose.model("Messages", MessagesSchema);

module.exports = Messages;