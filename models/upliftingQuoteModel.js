const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const upliftingQuotesSchema = new Schema({
  message_text: {type: String},
  // message_on: {type: Boolean},
});

const upliftingQuotes = mongoose.model("upliftingQuotes", upliftingQuotesSchema);

module.exports = upliftingQuotes;