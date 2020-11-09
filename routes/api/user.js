// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema({
//   full_name: { type: String, required: true },
//   phone_number: { type: String, required: true },
// //   birthday: { type: Date },
// //   password: { type: String, required: true },
//   messages: { type: Array }
// });

// const User = mongoose.model("User", userSchema);

// module.exports = User;

// const userController = require("../../controllers/UserController");
const userController = require("../../controllers/UserController");

// Matches with "/api/books"
router.route("/")
  .get(userController.findAll)
  .post(userController.create);

// Matches with "/api/books/:id"
router.route("/:id")
  .get(userController.findById);
  // .put(booksController.update)
  // .delete(booksController.remove);

 module.exports = router;


