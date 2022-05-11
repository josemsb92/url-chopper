const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/User");

loginRouter.post("/", async (request, response) => {
  const { body } = request;
  const { email, password } = body;
  const user = await User.findOne({ email });

  const valPassword =
    user === null ? false : await bcrypt.compare(password, user.password);

  if (!valPassword) {
    return response.status(401).json({
      error: "password or user not valid",
    });
  }

  return response.send({
    email: user.email,
    name: user.name,
  });
});
module.exports = loginRouter;
