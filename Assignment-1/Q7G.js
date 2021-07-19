let n = 5;
let row = 0;

for (let rowMirror = 1; rowMirror <= 2 * n; rowMirror++) {
  for (let col = 0; col <= 2 * n; col++) {
    if (col <= row || col >= 2 * n - row) {
      process.stdout.write(" *");
    } else {
      process.stdout.write("  ");
    }
  }
  console.log("");
  if (rowMirror < n) {
    row++;
  } else {
    row--;
  }
}
