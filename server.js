const express = require("express");
const app = express();
require("dotenv").config()



app.get("/", (req, res) => {
  res.send("Hello!")
});

app.get("/login", (req, res) => {
  res.send("<h1>Login page</h1>")
});

module.exports = app;
