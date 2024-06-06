"use strict";
const express = require("express");
const path = require("path");

const app = express();

app.get("/*", express.static(path.join(__dirname, "build")));

app.listen(5200, () => {
  console.log("server is running on port 5200");
});
