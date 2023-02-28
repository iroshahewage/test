const express = require("express");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const util = require("util");

dotenv.config();

const app = express();

app.get("/", async (req, res) => {
  const signAsync = util.promisify(jwt.sign);

  const token = await signAsync(
    { foo: "bar" },
    process.env.PRIVATE_ACCESS_KEY,
    {
      algorithm: "RS256",
    }
  );

  res.send(token);
});

app.listen(8000, () => {
  console.log("server is running");
});
