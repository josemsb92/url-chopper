const Url = require('../models/Url')
class urlManager {
    static async createShortUrl(body){       
    const newUrl = new Url(body)    
    await newUrl.save()
    return newUrl;
    }

    //gets the longUrl passing the shortUrl on the body
    static async getUrl(body){        
        const longUrl = await Url.find(body)        
        return longUrl
    }
}
module.exports = urlManager
