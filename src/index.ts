#!/usr/bin/env node

import path from "path";
import { spawn } from "child_process";
import { readFile } from "fs/promises";

const exec = ([cli, params]: [cli: string, params: string[]]) => {
  return spawn(cli, params, { stdio: "inherit" });
};

const commandAction = {
  i: () => exec(["ni", []]),
  s: async () => {
    const { scripts } = JSON.parse(
      await readFile(path.join(process.cwd(), "package.json"), "utf-8")
    );

    if (scripts.dev) {
      return exec(["nr", ["dev"]]);
    } else {
      return exec(["nr", ["start"]]);
    }
  },
  b: () => exec(["nr", ["build"]]),
  e: () => exec(["nr", ["e2e"]]),
  t: () => exec(["nr", ["test"]]),
};

type Key = keyof typeof commandAction;

const shortCommand = path.basename(process.argv[1]) as Key;

commandAction[shortCommand] && commandAction[shortCommand]();
