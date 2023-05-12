#!/usr/bin/env node

import { exec } from "./index";
import { resolveRepoUrl } from "./utils";

const [, , repo] = process.argv;

exec(["git", ["clone", repo]]).on("close", (code) => {
  if (code === 0) {
    const fold = resolveRepoUrl(repo);
    exec(["code", [fold]]);
  }
});
