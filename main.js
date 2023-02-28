const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const util = require("util");

dotenv.config();

const app = express();

app.get("/", async (req, res) => {
  const signAsync = util.promisify(jwt.sign);

  const payload = { id: 123 };
  const token = await signAsync(payload, privateKey, { algorithm: "RS256" });

  res.send(token);
});

app.listen(8000, () => {
  console.log("server is running");
});
