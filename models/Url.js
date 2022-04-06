const mongoose = require('../mongoose')
const { Schema, model } = mongoose;

const urlSchema = new Schema({
  OriginalUrl:  String,
  GeneratedUrl: String

});

const Url = model('Url', urlSchema)

module.exports = Url