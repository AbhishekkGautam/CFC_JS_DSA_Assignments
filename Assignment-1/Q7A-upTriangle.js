let readlineSync = require("readline-sync");

let n = readlineSync.question("Enter number of rows - ");

for (let row = 0; row < n; row++) {
  for (let col = 0; col <= row; col++) {
    process.stdout.write("* ");
  }
  process.stdout.write("\n");
}
