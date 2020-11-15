const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  meditationsSchema = new Schema({
    message_text: { type: String },
    message_on: { type: Boolean },
  }),
  meditations = mongoose.model("meditations", meditationsSchema);
module.exports = meditations;
