const mongoose = require('../mongoose')
const { Schema, model } = mongoose;

const userSchema = new Schema({
  Name:  String,
  LastName: String,
  Age:   Number,
  IsImportant: Boolean,
  date: { type: Date, default: Date.now }  
});

const User = model('User', userSchema)

module.exports = User