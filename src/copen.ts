#!/usr/bin/env node --experimental-specifier-resolution=node

import path from 'path'
import { exec } from "./index";

const [, , repo] = process.argv;

exec(["git", ["clone", repo]]).on('close', () => {
  const [fold] = path.basename(repo).split('.')
  exec(["code", [fold]]);
});
