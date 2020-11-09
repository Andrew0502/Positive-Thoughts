const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  fullName: String,
  birthday: String,
  phoneNumber: String,
  username: String,
  password: String,
  email: String

});

const User = mongoose.model("User", UserSchema);

module.exports = User;