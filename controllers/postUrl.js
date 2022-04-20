const urlManager = require("../managers/urlManager");
//short-unique-id library generates an short uuid.
const ShortUniqueId = require("short-unique-id");
const uid = new ShortUniqueId({ length: 6 });
var validator = require("validator");

async function postUrl(req, res) {
  const { OriginalUrl, UserId } = req.body;

  const url = validator.isURL(OriginalUrl)
    ? await urlManager.createShortUrl({
        OriginalUrl,
        GeneratedUrl: `${uid()}`,
        UserId,
      })
    : "undefined";

  res.status(201).json({ url: url }).end();
}

module.exports = postUrl;
