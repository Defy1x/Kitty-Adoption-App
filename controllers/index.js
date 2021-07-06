const router = require("express").Router();
const checkAuthorization = require('../utils/authorization');

const apiRoutes = require("./api");
const homeRoutes = require("./home-routes");
const kittyRoutes = require("./kitty-routes");

router.use("/", homeRoutes);
router.use("/kitty", kittyRoutes);
router.use("/api", apiRoutes);

module.exports = router;


// const path = require("path");
// const router = require("express").Router();
// const apiRoutes = require("./api");
// const checkAuthorization = require('../utils/authorization');
//
// // API Routes
// router.use("/api", apiRoutes);
//
// // If no API routes are hit, send the React app
// router.use(function(req, res) {
//   res.sendFile(path.join(__dirname, "../client/build/index.html"));
// });
//
// module.exports = router;
