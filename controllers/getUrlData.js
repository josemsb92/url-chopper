const urlManager = require("../managers/urlManager");

async function getUrlData(req, res) {
  const url = await urlManager.getUrl(req.params)
  res.status(200).json(url).end();
}

module.exports = getUrlData;
