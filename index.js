require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const app = express()
const PORT = process.env.PORT || 3002
const cors = require('cors');
//Provisional Cors all origin alloweds, needs to be changed.
app.use(cors());
app.use(bodyParser.json());

app.use('/urlchopper', require('./routes'))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})
//comentario de prueba