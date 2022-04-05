const mongoose = require('../mongoose')
const { Schema, model } = mongoose;

const urlSchema = new Schema({
  OriginalUrl:  String,
  GeneratedUrl: String, 
  date: { type: Date, default: Date.now }  
});

const Url = model('Url', urlSchema)

module.exports = Url