const Url = require("../models/Url");
class urlManager {
  static async createShortUrl(body) {
    const newUrl = new Url(body);
    await newUrl.save();
    return newUrl;
  }

  //gets the longUrl passing the shortUrl on the body
  static async getUrl(body) {
    const longUrl = await Url.find(body);
    return longUrl;
  }

  static async getUrlById(id) {
    console.log(id, "id en manager");
    const data = await Url.find({ UserId: id });
    console.log(data, " DATA");
    return data;
  }
}
module.exports = urlManager;
