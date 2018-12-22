"use strict";

const fs = require("fs");
const boxen = require("boxen");
const chalk = require("chalk");
const path = require("path");

const card = chalk`
{blue Kevin Pollet @kevinpollet}

Software Tech Lead @hl2
Java, TypeScript, Node.js, Docker, AWS & OSS 🚀
Vinyl Records 😍
Photography 📷

{blue ❯} Twitter:  https://twitter.com/kevinpollet
{blue ❯} GitHub:   https://github.com/kevinpollet
{blue ❯} LinkedIn: https://www.linkedin.com/in/kevinpollet
`;

fs.writeFileSync(
  path.join(__dirname, "../bin/output"),
  boxen(card, {
    borderStyle: "round",
    padding: 1
  })
);
