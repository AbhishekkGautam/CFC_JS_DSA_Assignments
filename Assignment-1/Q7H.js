let readlineSync = require("readline-sync");

let n = readlineSync.question("Enter number of rows - ");

let row = 0;
for (let rowMirror = 0; rowMirror < 2 * n - 1; rowMirror++) {
  let col = 0;
  for (let colMirror = 0; colMirror < 2 * n - 1; colMirror++) {
    if (col < n - row) {
      process.stdout.write("* ");
    } else {
      process.stdout.write("  ");
    }

    if (colMirror < n - 1) {
      col++;
    } else {
      col--;
    }
  }
  process.stdout.write("\n");
  if (rowMirror < n - 1) {
    row++;
  } else {
    row--;
  }
}
