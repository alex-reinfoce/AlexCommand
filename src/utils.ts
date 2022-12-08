import { exec } from "child_process";
import path from "path";
import { cwd } from "process";

export const resolveRepoUrl = (url: string) => {
  const basename = path.basename(url);
  const endIndex = basename.indexOf(".git");
  return basename.slice(0, endIndex);
};

export const execCommand = (command: string): Promise<string> => {
  return new Promise((resolve, rejected) => {
    exec(command, { cwd: cwd(), windowsHide: true }, (error, stdout) => {
      if (error) {
        rejected(error);
        return;
      }
      resolve(stdout);
    });
  });
};
