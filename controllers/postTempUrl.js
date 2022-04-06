const urlManager = require("../managers/urlManager");
//short-unique-id library generates an short uuid.
const ShortUniqueId = require('short-unique-id');
const uid = new ShortUniqueId({ length: 6 });
async function postUrl(req, res) {
  const url = await urlManager.createTempUrl({...req.body,GeneratedUrl:`${uid()}`}) 
  res.status(201).json({ url: url }).end();
}

module.exports = postUrl;
