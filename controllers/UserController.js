const express = require("express");
const db = require("../models");

const router = express.Router();

router.get("/user", (req, res) => {
  db.User.find().then((allUser) => {
    console.log(allUser);
    res.json({ allUser: allUser });
  }).catch(error => {
    console.log(error)
  })
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  db.User.findById(req.params.id)
    .then((foundUser) => {
      console.log(foundUser);
      res.json(foundUser);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "there has been an error.",
      });
    });
});

router.post("/sign-up", (req, res) => {
  const newUser = (req.body);
  //we can change up the fields going forward and it will handle because whatever we end up with is req.body
    // firstName: req.body.firstName,
    // lastName: req.body.lastName,
    // birthday: req.body.birthday,
    // phoneNumber: req.body.phoneNumber,
    // // username: req.body.username,
    // password: req.body.password,
    // email: req.body.email
  // };
  db.User.create(newUser).then((newUser) => {
    res.json(newUser);
  });
});

router.post("/login", (req, res) => {
  console.log(req.body);
  db.User.findOne({email:req.body.email}).then((foundUser) => {
    if (foundUser.password === req.body.password){
      res.json(foundUser);
    }
    else {
      res.status(401).json("User not authorized");
    }
  });
});
// the total route /api/user/:id
router.put("/:id", (req, res) => {
  db.User.findByIdAndUpdate(req.params.id,
    req.body)
    .then((updatedUser) => {
      console.log(updatedUser);
      res.json({
        error: false,
        data: updatedUser,
        message: "Successfully updated profile.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to update profile.",
      });
    });
});

// Delete route works now.
// the total route /api/user/:id
router.delete("/:id", (req, res) => {
  db.User.findByIdAndDelete({ _id: req.params.id})
    .then((deletedUser) => {
      console.log(deletedUser);
      res.json({
        error: false,
        data: deletedUser,
        message: "Successfully deleted profile.",
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: true,
        data: null,
        message: "Unable to delete profile.",
      });
    });
});

module.exports = router;
