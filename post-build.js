const { copyFileSync } = require("fs");
const { join } = require("path");

const src = join(__dirname, "src", "index.js");
const target = join(__dirname, "lib", "index.mjs");
copyFileSync(src, target);
