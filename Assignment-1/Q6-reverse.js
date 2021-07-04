let readlineSync = require("readline-sync");

let input = readlineSync.question("Enter your number - ");

let reverseNum = 0;

num = input;

while (num > 0) {
  let a = num % 10;
  // num = parseInt(num / 10);
  // OR
  num = (num - (num % 10)) / 10;
  reverseNum = reverseNum * 10 + a;
}

console.log(`Reverse of ${input} is ${reverseNum}.`);
