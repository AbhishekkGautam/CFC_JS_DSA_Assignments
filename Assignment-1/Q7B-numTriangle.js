let readlineSync = require("readline-sync");

let n = readlineSync.question("Enter number of rows - ");

for (let row = 1; row <= n; row++) {
  for (let col = 1; col <= row; col++) {
    process.stdout.write(col + " ");
  }
  process.stdout.write("\n");
}
