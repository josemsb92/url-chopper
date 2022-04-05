const User = require('../models/User')
class userManager {
    static async createUser(body){
    const newUser = new User({
    Name:  body.name,
    LastName: body.lastName,
    Age:   body.age
    })
    await newUser.save()
    return newUser;
}
}
module.exports = userManager
