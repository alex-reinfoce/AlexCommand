#!/usr/bin/env noderesolveRepoUrl

import { spawn } from "child_process";

export const exec = ([cli, params]: [cli: string, params: string[]]) => {
  return spawn(cli, params, { stdio: "inherit", shell: true },)
};
