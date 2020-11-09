const express = require("express");
const db = require("../models/PromptModel");

const router = express.Router();

router.post("/", (req, res) => {
  const newPrompt = {
    prompt: req.body.prompt,
  };
  db.user.create(newPrompt).then((newPrompt) => {
    res.json(newPrompt);
  });
});

module.exports = router;
