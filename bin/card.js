#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");

const card = chalk`{bold Kevin Pollet {blue /} kevinpollet}

✦ Software Engineer {bold @TraefikLabs}
✦ Open Source Enthusiast
✦ Passionate learner and coder
✦ Go, Containers, Cloud and DevOps addict

{bold GitHub:}    {gray https://github.com/}{bold kevinpollet}
{bold Twitter:}   {gray https://twitter.com/}{bold @kevinpollet}
{bold LinkedIn:}  {gray https://www.linkedin.com/in/}{bold kevinpollet}
{bold Website:}   {bold https://kevinpollet.dev}`;

console.log(
  boxen(card, {
    borderColor: "blue",
    borderStyle: "round",
    margin: 1,
    padding: 1,
  })
);
