import { test, expect } from "vitest";
import fs from "fs";
import mockFs from "mock-fs";
import { registerCommands } from "../register";

test("registerCommands should write commands to package.json", async () => {
  const mockPackageJson = {
    name: "test",
    version: "1.0.0",
  };

  mockFs({
    "package.json": JSON.stringify(mockPackageJson),
  });

  const commands = [{ name: "i", filename: "install.js" }];

  registerCommands(commands);

  const updatedPackageJson = JSON.parse(
    fs.readFileSync("package.json", "utf-8")
  );

  expect(updatedPackageJson.bin).toBeDefined();
  expect(updatedPackageJson.bin.i).toEqual("./dist/cli/install.js");

  mockFs.restore();
});
