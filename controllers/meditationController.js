const express = require("express");
const db = require("../models");
const router = express.Router();

//total route here /api/prompt
router.get("/", (req, res) => {
  db.Meditation.find({}).then((allMeditations) => {
    console.log(allMeditations);
    res.json({allMeditations: allMeditations});
  }).catch(error => {
    console.log(error)
  })
});

module.exports = router;
