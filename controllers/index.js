const router = require("express").Router();
const checkAuthorization = require('../utils/authorization');

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const kittyRoutes = require("./kitty-routes");

router.use("/", homeRoutes);
router.use("/kitty", checkAuthorization, libraryRoutes);
router.use("/api", apiRoutes);

module.exports = router;
