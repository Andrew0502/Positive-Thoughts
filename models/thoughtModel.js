const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  thoughtsSchema = new Schema({
    prompt: { type: String },
    message_on: { type: Boolean },
  }),
  thoughts = mongoose.model("thoughts", thoughtsSchema);
module.exports = thoughts;
