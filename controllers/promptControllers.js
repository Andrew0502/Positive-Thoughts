const express = require("express");
const db = require ("../models");

const router = express.Router();


  router.post("/", (req, res) => {
  const newPrompt = {
    prompt: req.body.prompt,
    // creatorId: decoded._id,
  };
  db.Prompt.create(newPrompt).then((newPrompt) => {
    res.json(newPrompt);
  });
  
});
// router.put("/:id", (req, res) => {
  
//   //   });
//   // } else {
//   // If jwt is valid, pull the allowable fields from the body and update the book.
//   //   console.log(decoded);
//   const updatedBook = {
//     title: req.body.title,
//     pages: req.body.pages,
//     author: req.body.author,
//   };
//   // Restrict updates where the creatorId is equal to the user-provided token _id.
//   db.Book.findOneAndUpdate(
//     // { _id: req.params.id, creatorId: decoded._id },
//     { _id: req.params.id },
//     updatedBook,
//     { new: true }
//   )
//     .then((updatedBook) => {
//       if (!updatedBook) {
//         res.status(404).json({
//           error: true,
//           data: null,
//           message: "Unable to find that book.",
//         });
//       } else {
//         res.json({
//           error: false,
//           data: updatedBook,
//           message: "Successfully updated book.",
//         });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({
//         error: true,
//         data: null,
//         message: "An error occurred updating your book.",
//       });
//     });
//   // }
//   //   });
// });
// router.delete("/:id", (req, res) => {
//   db.Book.findByIdAndDelete(req.params.id).then((result) => {
//     res.json(result);
//   });
// });
module.exports = router;