"use strict";

const fs = require("fs");
const boxen = require("boxen");
const chalk = require("chalk");
const path = require("path");

chalk.level = 3;

const card = chalk`
{bold Kevin Pollet / @kevinpollet}

✦ Software Engineer
✦ TypeScript, JavaScript, Go, Java, Node.js, Docker, AWS
✦ OSS ❤
✦ Vinyl Records 😍
✦ Hiking ⛰

{blue https://twitter.com/kevinpollet}
{blue https://github.com/kevinpollet}
{blue https://www.linkedin.com/in/kevinpollet}
{blue https://kevinpollet.dev}
`;

fs.writeFileSync(
  path.join(__dirname, "../bin/output"),
  boxen(card, {
    borderStyle: "round",
    margin: 1,
    padding: 1,
  })
);
