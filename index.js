require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3002;
const loginRouter = require("./controllers/login");

app.use(bodyParser.json());
//Provisional Cors all origin alloweds, needs to be changed.

app.use(cors());

app.use("/urlchopper", require("./routes"));

app.use("/login", loginRouter);

app.listen(PORT, () => {
  console.log(`App is listening on port ${PORT}`);
});
//comentario de prueba
