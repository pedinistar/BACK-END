// aisa koi bhi route jiska koi hisa baar baar same rehta hai aur kuch hissa baar baar change hota hai iska liye ap ek dynamic route bana skte ho

const express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("This is / Route!");
});

app.get("/profile", function (req, res) {
  res.send("This is Profile Route!");
});

app.get("/profile/:username", function (req, res) {
  res.send(`This is ${req.params.username} Profile Route!`);
});

// url mein jab bhi aapke pass ek aisa pattern ho
// /profile/:username (jidr colon ho)
// :username -> params kehte hain isse
// username ko access karne ke liye req mein params mein jakr username ko access kar skte hain

app.listen(3000);
