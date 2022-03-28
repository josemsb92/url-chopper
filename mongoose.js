const mongoose = require('mongoose')
require('dotenv').config()
const connectionString = `mongodb+srv://${process.env.DBUSER}:${process.env.DBPASSWORD}@url-chopper-cluster.2z4gw.mongodb.net/Database-ChopperUrl?retryWrites=true&w=majority`
mongoose.connect(connectionString)
    .then( () => {
        console.log("Database Connected")
}).catch(err => {
    console.log(err);
})
