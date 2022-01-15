//require the express router
const router = require("express").Router();
//call the required routes for thought and user models
const userRoutes = require("./user-routes");
const thougthsRoutes = require("./thoughts-routes");

router.use("/users", userRoutes);
router.use("/thoughts", thougthsRoutes);

module.exports = router;

