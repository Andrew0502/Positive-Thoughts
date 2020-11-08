const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/positive-thoughts"
);

const quotesSeed = [
    {
        message_text:
        "It's not whether you get knocked down, it's wether you get up. - Vince Lombardi",
    },
]