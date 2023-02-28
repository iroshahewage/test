const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const app = express();

var token = jwt.sign({ foo: "bar" }, process.env.PRIVATE_ACCESS_KEY, {
  algorithm: "RS256",
});

app.get("/", (req, res) => {
  res.send(token);
});

app.listen(8000, () => {
  console.log("server is running");
});
