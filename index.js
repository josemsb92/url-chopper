const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT || 3002

app.use('/urlchopper', require('./routes'))


app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})