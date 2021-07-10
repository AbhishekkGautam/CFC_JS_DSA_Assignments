let readlineSync = require("readline-sync");

let n = readlineSync.question("Enter number of rows - ");

var result = 0;

for (let i = 1; i <= n; i++) {
  if (i == 1) {
    result = i;
  } else {
    result = result * 11;
  }
  process.stdout.write(result + " ");
  process.stdout.write("\n");
}
