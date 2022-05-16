require("../mongoose");

const router = require("express").Router();
router.post("/", require("../controllers/postUrl"));
router.get("/:GeneratedUrl", require("../controllers/getUrlData"));
router.get("/id/:Userid", require("../controllers/getUrlsId"));
router.delete("/delete/", require("../controllers/deleteUrl"));
module.exports = router;
