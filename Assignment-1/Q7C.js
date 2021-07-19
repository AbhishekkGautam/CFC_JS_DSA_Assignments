let n = 5;

for (let row = 1; row <= n; row++) {
  let col = 0;
  for (let colMirror = 1; colMirror <= 2 * n - 1; colMirror++) {
    if (colMirror >= n - row + 1 && colMirror <= n) {
      col++;
      process.stdout.write(col + " ");
    } else if (colMirror <= n + row - 1 && colMirror > n) {
      col--;
      process.stdout.write(col + " ");
    } else {
      process.stdout.write("  ");
    }
  }
  process.stdout.write("\n");
}
