#!/usr/bin/env node --experimental-specifier-resolution=node

import path from "path";
import { readFile } from "fs/promises";
import { exec } from ".";

(async () => {
  const { scripts } = JSON.parse(
    await readFile(path.join(process.cwd(), "package.json"), "utf-8")
  );

  if (scripts.start) {
    exec(["nr", ["start"]]);
  } else if (scripts.dev) {
    exec(["nr", ["dev"]]);
  } else {
    throw new Error("no start or dev script");
  }
})();
