#!/usr/bin/env node --experimental-specifier-resolution=node

import { exec } from "./index";
import { resolveRepoUrl } from './utils';

const [, , repo] = process.argv;

exec(["git", ["clone", repo]]).on('close', () => {
  const fold = resolveRepoUrl(repo);
  exec(["code", [fold]]);
});
