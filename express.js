// express is a framework for node.js
// express ke use case -> is used for ROUTING
// routing -> GET POST

const express = require("express");
const app = express();

// middleware
app.use(function (req, res, next) {
  // req mein user ka data hoga/ request ka data hoga
  // console.log(req);
  console.log("hello from middleware!");
  next();
});

app.get("/", function (req, res) {
  res.send("HUla BdUla");
});

app.get("/profile", function (req, res) {
  res.send("here is profile route!");
});

app.listen(3000);

// bangya server 💜😭
