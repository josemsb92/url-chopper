const mongoose = require('../mongoose')
const { Schema, model } = mongoose;

const urlSchema = new Schema({
  OriginalUrl:  String,
  GeneratedUrl: String,
  UserId: {type: String, default: null},
  date: {type: Date, default: Date.now }
},
//Eliminates __v attribute from mongodb database
{ versionKey: false }
)
//Transform the _id attribute on the database to id attribute. It basicly copy _id into id and deletes _id
urlSchema.set('toJSON',{
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
  }
})

const Url = model('Url', urlSchema)

module.exports = Url