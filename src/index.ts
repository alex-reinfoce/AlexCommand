#!/usr/bin/env node

import path from "path";
import { spawn } from "child_process";

const exec = ([cli, params]: [cli: string, params: string[]]) => {
  return spawn(cli, params, { stdio: "inherit" });
};

const commandAction = {
  i: () => exec(["ni", []]),
  s: () => exec(["nr", ["start"]]),
  b: () => exec(["nr", ["build"]]),
  e: () => exec(["nr", ["e2e"]]),
  t: () => exec(["nr", ["test"]]),
};

type Key = keyof typeof commandAction;

const shortCommand = path.basename(process.argv[1]) as Key;

commandAction[shortCommand] && commandAction[shortCommand]();
