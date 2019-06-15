"use strict";

const fs = require("fs");
const boxen = require("boxen");
const chalk = require("chalk");
const path = require("path");

const card = chalk`
Kevin Pollet {green /} @kevinpollet

Software Tech Lead @hl2
Java, TypeScript, Node.js, Docker, AWS & OSS 🚀
Vinyl Records 😍

 {bold Twitter:}  {blue https://twitter.com/kevinpollet}
  {bold GitHub:}  {blue https://github.com/kevinpollet}
{bold LinkedIn:}  {blue https://www.linkedin.com/in/kevinpollet}
`;

fs.writeFileSync(
  path.join(__dirname, "../bin/output"),
  boxen(card, {
    borderStyle: "round",
    margin: 1,
    padding: 1,
  })
);
