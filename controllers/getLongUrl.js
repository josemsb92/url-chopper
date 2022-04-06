const urlManager = require("../managers/urlManager");

async function getLongUrl(req, res) {
  const url = await urlManager.getTempUrl({...req.body}) 
  res.status(200).json({ url: url }).end();
}

module.exports = getLongUrl;
