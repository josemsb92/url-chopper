const urlManager = require("../managers/urlManager");

async function getUrlsId(req, res) {
  const url = await urlManager.getUrlById(req.params);
  console.log(req.params, "PARAAMS");
  res.status(200).json(url).end();
}

module.exports = getUrlsId;
