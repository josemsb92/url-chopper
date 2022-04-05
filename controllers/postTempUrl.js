const urlManager = require("../managers/urlManager");

async function postUrl(req, res) {
  console.log(req.body, "body");
  const url = await urlManager.createTempUrl({request:req.body,GeneratedUrl:'asf'})
  console.log("controller");

  res.status(201).json({ url: url }).end();
}

module.exports = postUrl;
