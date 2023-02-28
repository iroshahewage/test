const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const util = require("util");

dotenv.config();

const app = express();

app.get("/", async (req, res) => {
  try {
    const signAsync = util.promisify(jwt.sign);

    const payload = { id: 123 };
    const token = await signAsync(payload, process.env.PRIVATE_ACCESS_KEY, {
      algorithm: "RS256",
    });

    res.send(token);
  } catch (err) {
    res.send(err.message);
  }
});

app.listen(8000, () => {
  console.log("server is running");
});
