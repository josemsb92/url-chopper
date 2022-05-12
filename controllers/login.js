const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const loginRouter = require("express").Router();
const User = require("../models/User");

loginRouter.post("/", async (request, response) => {
  const { body } = request;
  const { email, password } = body;
  const user = await User.findOne({ email });

  const valPassword =
    user === null ? false : await bcrypt.compare(password, user.password);

  if (!(valPassword && user)) {
    return response.status(401).json({
      error: "password or user not valid",
    });
  }

  const userToken = {
    email: user.email,
    id: user._id,
  };

  const token = jwt.sign(userToken, process.env.SECRET);

  return response.send({
    email: user.email,
    id: user._id,
    token,
  });
});
module.exports = loginRouter;
