const git = require("../../utils/git");

describe("exercise-12", () => {
  test("switch to the develop branch and create a new commit", async () => {
    let branches = await git.branch();
    let count = await git.raw(["rev-list", "develop", "^master", "--count"]);

    let n = Number(count);

    expect(branches.current).toMatch(/develop/);
    expect(n).toEqual(1);
  });
});
