#!/usr/bin/env node

"use strict";

const fs = require("fs");
const path = require("path");
const card = path.join(__dirname, "output");

fs.createReadStream(card).pipe(process.stdout);
