require("../mongoose");

const router = require("express").Router();
router.post("/", require("../controllers/postUrl"));
router.get("/:GeneratedUrl", require("../controllers/getUrlData"));
router.get("/", require("../controllers/getUrlsId"));
module.exports = router;
