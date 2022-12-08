#!/usr/bin/env node
import { execCommand } from "./utils";

/** 获取所有非当前的分支 */
const getBranch = (str: string) => {
  const splited = str.split("\n");
  if (splited.length) {
    return splited
      .filter((branch) => !branch.startsWith("*") && Boolean(branch))
      .map((branch) => {
        let result = branch.trim().replace("\n", "");

        if (result.startsWith("origin/")) {
          result = result.replace("origin/", "");
        }

        return result;
      });
  } else {
    return [];
  }
};

(async () => {
  const local = await execCommand("git branch");
  const localBranchs = getBranch(local);

  const remote = await execCommand("git branch -r");
  const remoteBranchs = getBranch(remote);

  console.log(localBranchs);
  console.log(remoteBranchs);
})();
