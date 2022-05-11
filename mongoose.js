const mongoose = require("mongoose");
require("dotenv").config();
const connectionString = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@link-chopper-cluster.2z4gw.mongodb.net/TestDatabase?retryWrites=true&w=majority`;
mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

process.on("uncaughtException", (error) => {
  console.log(error);
  mongoose.disconnect();
});
module.exports = mongoose;
