const Url = require('../models/Url')
class urlManager {
    static async createTempUrl(body){       
    const newUrl = new Url(body)    
    await newUrl.save()
    return newUrl;
    }

    //gets the longUrl passing the shortUrl on the body
    static async getTempUrl(body){        
        const longUrl = await Url.find(body)  
        return longUrl
    }
}
module.exports = urlManager
