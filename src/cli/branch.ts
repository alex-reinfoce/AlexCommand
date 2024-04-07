#!/usr/bin/env node
import { execCommand } from "../utils";

(async () => {
  await execCommand(
    'git for-each-ref --sort=-committerdate refs/heads/ --format="[%(committerdate:iso8601)] %(refname:short)"'
  );
})();
