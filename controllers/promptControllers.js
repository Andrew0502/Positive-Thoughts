const express = require("express");
const db = require("../models/");

const router = express.Router();

//total route here /api/prompt
router.get("/", (req, res) => {
  db.Prompt.find({}).then((allPrompts) => {
    console.log(allPrompts);
    res.json({allPrompts: allPrompts});
  }).catch(error => {
    console.log(error)
  })
});

router.post("/", (req, res) => {
  const newPrompt = {
    prompt: req.body.prompt,
  };
  db.Prompt.create(newPrompt).then((newPrompt) => {
    res.json(newPrompt);
  });
});

module.exports = router;
