import { describe, expect, it } from "vitest";
import { resolveRepoUrl } from "../utils";

describe.concurrent("suite", () => {
  it("resolve repo url", async () => {
    expect(resolveRepoUrl("git@github.com/vue-2.7-v-slot-issue.git")).toEqual(
      "vue-2.7-v-slot-issue"
    );
  });
});
