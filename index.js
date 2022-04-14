require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3002
app.use(bodyParser.json());
//Provisional Cors all origin alloweds, needs to be changed.
const cors = require('cors');
var corsOptions = {
    origin: 'http://localhost:3000/'
  }
app.use(cors(corsOptions));

app.use('/urlchopper', require('./routes'))

app.listen(PORT, () => {
    console.log(`App is listening on port ${PORT}`);
})
//comentario de prueba