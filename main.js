const program = require("commander");
const fs = require("fs");
const md2html = require("./md2html");
const marked = require("marked");



program.option("--gfm", "GFMを有効にする");


program.parse(process.argv);

const options = program.opts();
console.log(options.gfm);
const filePath = program.args[0];

const cliOptions = {
  gfm: false,
  ...program.opts(),
};

fs.readFile(filePath, { encoding: "utf8" }, (err, file) => {
  if(err){
    console.error(err.message);
    process.exit(1);
    return;
  } else {
    const html = md2html(file, cliOptions);
    console.log(html);
  }
});