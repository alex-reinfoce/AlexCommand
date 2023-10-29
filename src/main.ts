import { registerCommands } from "./register";

registerCommands([
  { name: "i", filename: "install.js" },
  { name: "s", filename: "start.js" },
  { name: "b", filename: "build.js" },
  { name: "sb", filename: "sb.js" },
  { name: "e", filename: "e2e.js" },
  { name: "t", filename: "test.js" },
  { name: "copen", filename: "copen.js" },
  { name: "cbranch", filename: "cbranch.js" },
]);
