const urlManager = require("../managers/urlManager");
const mongoose = require("mongoose");
async function deleteUrl(req, res) {
  const url = await urlManager.deleteUrl(mongoose.Types.ObjectId(req.body._id));
  console.log(req.body._id, "el body ");
  console.log(url, "DATA EN CONTROLLER");

  res.status(200).json([]).end();
}

module.exports = deleteUrl;
