const Url = require('../models/Url')
class urlManager {
    static async createTempUrl(body){
    const newUrl = new Url(...body)
    await newUrl.save()
    return newUrl;
}
}
module.exports = urlManager
