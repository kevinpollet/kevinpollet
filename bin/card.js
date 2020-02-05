#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");

const card = chalk`
{bold Kevin Pollet / @kevinpollet}

✦ Software Engineer
✦ Open Source Enthusiast
✦ Go, TypeScript, JavaScript, Java, Node.js, Docker, Cloud, DevOps
✦ Vinyl Records & Hiking {red ❤}

{bold GitHub:}    https://github.com/{bold {blue kevinpollet}}
{bold Twitter:}   https://twitter.com/{bold {blue kevinpollet}}
{bold LinkedIn:}  https://www.linkedin.com/in/{bold {blue kevinpollet}}
{bold Web:}       {bold {blue https://kevinpollet.dev}}
`;

console.log(
  boxen(card, {
    borderStyle: "round",
    margin: 1,
    padding: 1,
  })
);
