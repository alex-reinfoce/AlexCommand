#!/usr/bin/env node
import { exec } from "..";

exec([
  "git",
  [
    'for-each-ref --sort=-committerdate refs/heads/ --format="[%(committerdate:iso8601)] %(refname:short)"',
  ],
]);
