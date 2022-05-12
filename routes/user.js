require("../mongoose");

const router = require("express").Router();
router.post("/", require("../controllers/postUser"));
/* router.get("/id", require("../controllers/getUser")); */

module.exports = router;
