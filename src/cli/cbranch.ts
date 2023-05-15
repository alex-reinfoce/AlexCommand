#!/usr/bin/env node
import { exec } from "..";
import { execCommand } from "../utils";

/** 获取所有非当前的分支 */
const getBranch = async (str: string) => {
  const currentBranch = (
    await execCommand("git rev-parse --abbrev-ref HEAD")
  ).replace("\n", "");

  const splited = str.split("\n");

  if (splited.length) {
    return splited
      .filter((branch) => !branch.endsWith(currentBranch) && Boolean(branch))
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

const removeDuplicate = (arr1: string[], arr2: string[]) => {
  return arr1.filter((item) => !arr2.includes(item));
};

(async () => {
  await execCommand("git remote prune origin");

  const local = await execCommand("git branch");
  const localBranchs = await getBranch(local);

  const remote = await execCommand("git branch -r");
  const remoteBranchs = await getBranch(remote);

  const targetBranchs = removeDuplicate(localBranchs, remoteBranchs);

  if (!targetBranchs.length) {
    return console.log("暂无冗余分支😌");
  }

  exec(["git", ["branch -D", ...targetBranchs]]);
})();
