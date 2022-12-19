#!/usr/bin/env node
import { exec } from "./index";

const [, , ...msg] = process.argv;

const message = msg.join(" ").trim();
exec(["git", [`add . && git commit -m "fix: ${message}"`]]);
