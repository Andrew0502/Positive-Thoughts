const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
  );

  const quotes = [
      {
        message_text: "It's not whether you get knocked down, it's wether you get up. - Vince Lombardi"
      },
      {
        message_text: "Do the best that you can. That is the most you can expect of yourself."
      },
      {
        message_text: "Never give up hope, no matter how dark things may seem."
      },
      {
        message_text: "Trust in your friends, and they’ll have reason to trust in you."
      },
      {
        message_text: "The best confidence builder is experience."
      },
      {
        message_text: "The winding path to peace is always a worthy one, regardless of how many turns it takes."
      },
      {
        message_text: "It is a rough road that leads to the heights of greatness."
      },
      {
        message_text: "Believe in yourself or no one else will."
      },
      {
        message_text: "A wise leader knows when to follow."
      },
      {
        message_text: "Where there’s a will, there’s a way."
      },
      {
        message_text: "Love comes in all shapes and sizes."
      },
      {
        message_text: "Only through fire is a strong sword forged."
      },
      {
        message_text: "One must let go of the past to hold on to the future."
      },
      {
        message_text: "When all seems hopeless, a true hero gives hope."
      },
      {
        message_text: "Courage begins by trusting oneself."
      },
      {
        message_text: "When in doubt, go to the source."
      },
      {
        message_text: "The wise benefit from a second opinion."
      },
  ]