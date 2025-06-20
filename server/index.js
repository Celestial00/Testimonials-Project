const express = require("express");

const app = express();
const Conn = require("./DatabaseConfig.js");
require("dotenv").config();

// Middlware
app.use(express.json());

//Routes

app.listen(process.env.PORT, () => {
  Conn();
  console.log(`http://localhost:${process.env.PORT}`);
});
