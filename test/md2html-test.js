const assert = require("assert");
const fs = require("fs");
const path = require("path");
const md2html = require("../md2html");

it("converts markdown to html (GFM=false)", () => {
  const sample = fs.readFileSync(path.resolve(__dirname, "./fixtures/sample.md"), { encoding: "utf8"});
  const expected = fs.readFileSync(path.resolve(__dirname, "./fixtures/expected.html"), { encoding: "utf8"});
  assert.strictEqual(md2html(sample, { gfm:false}).trimEnd(), expected.trimEnd());
});

it("convers markdown to html (GFM=true", () => {
  const sample = fs.readFileSync(path.resolve(__dirname, "./fixtures/sample.md"), { encoding:"utf8" });
  const expected = fs.readFileSync(path.resolve(__dirname, "./fixtures/expected-gfm.html"), { encoding:"utf8" });
  assert.strictEqual(md2html(sample, { gfm: true }).trimEnd(), expected.trimEnd());
});