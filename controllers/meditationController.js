const express = require("express"),
  db = require("../models"),
  router = express.Router();
router.get("/", (a, b) => {
  db.Meditation.find({})
    .then((a) => {
      console.log(a), b.json({ allMeditations: a });
    })
    .catch((a) => {
      console.log(a);
    });
}),
  (module.exports = router);