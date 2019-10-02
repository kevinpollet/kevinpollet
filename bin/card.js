#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");

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

console.log(
  boxen(card, {
    borderStyle: "round",
    margin: 1,
    padding: 1,
  })
);
