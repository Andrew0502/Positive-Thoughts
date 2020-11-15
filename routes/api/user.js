const userController = require("../../controllers/UserController");
router.route("/").get(userController.findAll).post(userController.create),
  router.route("/:id").get(userController.findById),
  (module.exports = router);