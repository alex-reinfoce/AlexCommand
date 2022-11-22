#!/usr/bin/env node --experimental-specifier-resolution=node

import path from 'path'
import { exec } from "./index";
import { resolveRepoUrl } from './utils';

const [, , repo] = process.argv;

exec(["git", ["clone", repo]]).on('close', () => {
  const [url] = path.basename(repo).split('.')
  const fold = resolveRepoUrl(url);
  exec(["code", [fold]]);
});
