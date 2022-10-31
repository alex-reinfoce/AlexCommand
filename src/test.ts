#!/usr/bin/env node --experimental-specifier-resolution=node

import { exec } from "./index";

exec(["nr", ["test"]]);
