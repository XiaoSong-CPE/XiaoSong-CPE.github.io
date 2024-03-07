/*
    convert docs/translation-pairs.xlsx to docs/translation-pairs.md
*/
const fs = require("fs");
const xlsx = require("xlsx");
const path = require("path");

// get data from excel file
const workbook = xlsx.readFile(path.join(__dirname, "docs", "translation-pairs.xlsx"));
const sheetName = workbook.SheetNames[0];
const sheet = workbook.Sheets[sheetName];
const sheetData = xlsx.utils.sheet_to_json(sheet);

// convert data to markdown
let markdown = "| English | Chinese | Note |\n| --- | --- | --- |\n";
sheetData.forEach((row, index) => {
  // preprocess
  let english = row["English"]
    .replace(/\|/g, "\\|")
    .replace(/[\n\r]/g, "<br/>");
  let chinese = row["Chinese"]
    .replace(/\|/g, "\\|")
    .replace(/[\n\r]/g, "<br/>");
  let note = row["Note"]
    ? row["Note"].replace(/\|/g, "\\|").replace(/[\n\r]/g, "<br/>")
    : "";
  markdown += `| ${english} | ${chinese} | ${note} |\n`;
});

// write to file
fs.writeFileSync(
  path.join(__dirname, "docs", "translation-pairs.md"),
  markdown
);
