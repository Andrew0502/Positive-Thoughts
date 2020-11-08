const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  full_name: { type: String, required: true },
  phone_number: { type: String, required: true },
//   birthday: { type: Date },
//   password: { type: String, required: true },
  messages: { type: Array }
});

const User = mongoose.model("User", userSchema);

module.exports = User;
