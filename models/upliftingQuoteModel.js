const mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  upliftingQuotesSchema = new Schema({
    message_text: { type: String },
    message_on: { type: Boolean },
  }),
  upliftingQuotes = mongoose.model("upliftingQuotes", upliftingQuotesSchema);
module.exports = upliftingQuotes;