"use strict";

const fs = require("fs");
const boxen = require("boxen");
const chalk = require("chalk");
const path = require("path");

const card = chalk`
{bold Kevin Pollet / @kevinpollet}

✦ Software Tech Lead
✦ Java, TypeScript, Go, Node.js, Docker, AWS
✦ OSS ❤
✦ Vinyl Records 😍
✦ Hiking ⛰

🐦 {blue https://twitter.com/kevinpollet}
👨‍💻 {blue https://github.com/kevinpollet}
👨‍💼 {blue https://www.linkedin.com/in/kevinpollet}
🌐 {blue https://kevinpollet.codes}
`;

fs.writeFileSync(
  path.join(__dirname, "../bin/output"),
  boxen(card, {
    borderStyle: "round",
    margin: 1,
    padding: 1,
  })
);
