const { type } = require("express/lib/response");
const mongoose = require("../mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    Name: String,
    Surname: String,
    LoginName: {type: String, required: true},
    password: {type: String, required: true},
    Email: {type: String, required: true},
    date: { type: Date, default: Date.now },
  },
  //Eliminates __v attribute from mongodb database
  { versionKey: false }
);
//Transform the _id attribute on the database to id attribute. It basicly copy _id into id and deletes _id
userSchema.set("toJSON", {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id;
    delete returnedObject._id;
  },
});

const User = model("User", userSchema);

module.exports = User;
