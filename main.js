const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

dotenv.config();

const app = express();

app.get("/", async (req, res) => {
  const token = await jwt.sign({ foo: "bar" }, process.env.PRIVATE_ACCESS_KEY, {
    algorithm: "RS256",
  });

  res.send(token);
});

app.listen(8000, () => {
  console.log("server is running");
});
