const router = require("express").Router();
const thoughtsRoutes = require("./books");

// Book routes
router.use("/Thoughts", thoughtsRoutes);

module.exports = router;
