#!/usr/bin/env node

import path from "path";
import { spawn } from "child_process";
import { readFile } from "fs/promises";

const exec = ([cli, params]: [cli: string, params: string[]]) => {
  return spawn(cli, params, { stdio: "inherit" });
};

const { scripts } = JSON.parse(
  await readFile(path.join(process.cwd(), "package.json"), "utf-8")
);

const commandAction = {
  i: () => exec(["ni", []]),
  s: async () => {
    if (scripts.start) {
      return exec(["nr", ["start"]]);
    } else if (scripts.dev) {
      return exec(["nr", ["dev"]]);
    } else {
      throw new Error("no start or dev script");
    }
  },
  b: () => exec(["nr", ["build"]]),
  e: () => exec(["nr", ["e2e"]]),
  t: () => exec(["nr", ["test"]]),
};

type Key = keyof typeof commandAction;

const shortCommand = path.basename(process.argv[1]) as Key;

commandAction[shortCommand] && commandAction[shortCommand]();
