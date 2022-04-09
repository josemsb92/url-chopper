const urlManager = require("../managers/urlManager");
//short-unique-id library generates an short uuid.
const ShortUniqueId = require('short-unique-id');
const { CURSOR_FLAGS } = require("mongodb");
const uid = new ShortUniqueId({ length: 6 });
async function postUrl(req, res) {
  const {OriginalUrl} = req.body
  const url =
  OriginalUrl.startsWith("https") ? 
     await urlManager.createShortUrl({OriginalUrl,GeneratedUrl:`${uid()}`}) : "undefined"
  
  
  res.status(201).json({ url: url }).end();
}

module.exports = postUrl;
