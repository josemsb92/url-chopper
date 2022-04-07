const urlManager = require("../managers/urlManager");

async function getLongUrl(req, res) {
  const url = await urlManager.getUrl(req.params)  
  const {OriginalUrl} = url[0]  
  res.status(200).json(OriginalUrl).end();
}

module.exports = getLongUrl;
