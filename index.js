require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const PORT = process.env.PORT || 3002

app.use(bodyParser.json());

app.use('/urlchopper', require('./routes'))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})