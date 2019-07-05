"use strict";

const fs = require("fs");
const boxen = require("boxen");
const chalk = require("chalk");
const path = require("path");

const card = chalk`
{bold Kevin Pollet / @kevinpollet}

✦ Software Tech Lead @hl2
✦ Java, TypeScript, Go, Node.js, Docker, AWS
✦ OSS Enthusiast
✦ Vinyl Records 😍

🐦 {blue https://twitter.com/kevinpollet}
👨‍💻 {blue https://github.com/kevinpollet}
👨‍💼 {blue https://www.linkedin.com/in/kevinpollet}
🌐 {blue https://kevinpollet.dev}
`;

fs.writeFileSync(
  path.join(__dirname, "../bin/output"),
  boxen(card, {
    borderStyle: "round",
    margin: 1,
    padding: 1,
  })
);
