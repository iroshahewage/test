const express = require("express");
const dotenv = require("dotenv").config();
const jwt = require("jsonwebtoken");
const util = require("util");
const config = require("config");

const app = express();

app.get("/", async (req, res) => {
  try {
    const signAsync = util.promisify(jwt.sign);

    const payload = { id: 123 };
    const token = await signAsync(
      payload,
      config.get("jwtKeys.privateAccessKey"),

      {
        algorithm: "RS256",
      }
    );

    res.send(token);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(8000, () => {
  console.log("server is running");
});
