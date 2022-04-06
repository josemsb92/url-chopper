const mongoose = require('../mongoose')
const { Schema, model } = mongoose;

const userSchema = new Schema({
  Name:  String,
  Surname: String,  
  LoginName: String,
  password: String,
  date: { type: Date, default: Date.now }  
});

const User = model('User', userSchema)

module.exports = User