import fs from "fs";
import path from "path";

interface Command {
  name: string;
  filename: string;
}

export function registerCommands(commands: Command[]): void {
  const packageJsonPath = path.resolve(process.cwd(), "package.json");
  const packageJson = JSON.parse(
    fs.readFileSync(packageJsonPath, { encoding: "utf8" })
  );

  packageJson.bin = {};

  for (const command of commands) {
    packageJson.bin[command.name] = `./dist/cli/${command.filename}`;
  }

  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
}
