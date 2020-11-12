const express = require("express");
const db = require("../models");

const router = express.Router();

//total route here /api/prompt
router.get("/", (req, res) => {
  db.Thought.find({}).then((allThoughts) => {
    console.log(allThoughts);
    res.json({allThoughts: allThoughts});
  }).catch(error => {
    console.log(error)
  })
});

router.post("/", (req, res) => {
  const newThought = {
    prompt: req.body.prompt,
  };
  db.Thought.create(newThought).then((newThought) => {
    res.json(newThought);
  });
});

module.exports = router;
