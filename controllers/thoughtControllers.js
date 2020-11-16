const express = require("express"),
  db = require("../models"),
  router = express.Router();
router.get("/", (a, b) => {
  db.Thought.find({})
    .then((a) => {
      console.log(a), b.json({ allThoughts: a });
    })
    .catch((a) => {
      console.log(a);
    });
}),
  router.post("/", (a, b) => {
    const c = { prompt: a.body.prompt };
    db.Thought.create(c).then((a) => {
      b.json(a);
    });
  }),
  (module.exports = router);