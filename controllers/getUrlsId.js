const urlManager = require("../managers/urlManager");
const mongoose = require("mongoose");
async function getUrlsId(req, res) {
  console.log(req.params, "id CONTROLLER");
  const url = await urlManager.getUrlById(
    mongoose.Types.ObjectId(req.params.Userid)
  );
  console.log(url, "DATA EN CONTROLLER");

  res.status(200).json(url).end();
}

module.exports = getUrlsId;
