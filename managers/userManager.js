const bcrypt = require("bcrypt");
const User = require("../models/User");
class userManager {
  static async createUser(body) {
    const newUser = new User(body);
    const salt = await bcrypt.genSalt(10);
    newUser.password = await bcrypt.hash(newUser.password, salt);
    await newUser.save();
    return newUser;
  }

  /*   static async getUserInfo(id){

  } */
}
module.exports = userManager;
