const express = require("express");
const app = express();
require("dotenv").config()



app.get("/", (req, res) => {
  res.send("Hello!")
});

app.get("/login", (req, res) => {
  res.send("<h1>Login page</h1>")
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running at Port:${PORT}`);
});


module.exports = app;