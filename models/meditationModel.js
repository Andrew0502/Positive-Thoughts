const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const meditationsSchema = new Schema({
  message_text: {type: String},
  // message_on: {type: Boolean},
});

const meditations = mongoose.model("meditations", meditationsSchema);

module.exports = meditations;