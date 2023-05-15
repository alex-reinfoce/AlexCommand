#!/usr/bin/env node

import path from "path";
import { readFile } from "fs/promises";
import { exec } from "../index";

(async () => {
  const { scripts } = JSON.parse(
    await readFile(path.join(process.cwd(), "package.json"), "utf-8")
  );

  if (scripts.dev) {
    exec(["nr", ["dev"]]);
  } else if (scripts.start) {
    exec(["nr", ["start"]]);
  } else {
    throw new Error("no start or dev script");
  }
})();
