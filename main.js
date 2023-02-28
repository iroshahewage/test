const express = require("express");
const express = require("config");

const app = express();

app.get("/", (req, res) => {
  res.send(process.env.PRIVATE_ACCESS_KEY);
});

app.listen(8000, () => {
  console.log("server is running");
});
