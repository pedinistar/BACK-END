// aisa koi bhi route jiska koi hisa baar baar same rehta hai aur kuch hissa baar baar change hota hai iska liye ap ek dynamic route bana skte ho

const express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("This is / Route!");
});

app.get("/profile", function (req, res) {
  res.send("This is Profile Route!");
});

app.listen(3000);
