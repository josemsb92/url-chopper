const userManager = require("../managers/userManager");

async function postUser(req, res) {
  console.log(req.body, "body");
  const user = await userManager.createUser({
    name: "Miguel",
    lastName: "Jimenez",
    age: 32,
  });
  console.log("controller");

  res.status(201).json({ user: user }).end();
}

module.exports = postUser;
