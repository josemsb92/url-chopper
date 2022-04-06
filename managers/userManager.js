const User = require('../models/User')
class userManager {
    static async createUser(body){
    const newUser = new User(body)
    await newUser.save()
    return newUser;
}
}
module.exports = userManager
