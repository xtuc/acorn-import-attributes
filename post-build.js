const fs = require("fs");
const path = require("path");

const src = path.join(__dirname, "src", "index.js");
const target = path.join(__dirname, "lib", "index.mjs");
fs.copyFileSync(src, target);
