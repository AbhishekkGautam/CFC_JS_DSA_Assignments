let readlineSync = require("readline-sync");

let input = readlineSync.question("Enter your number - ");

let num = input.toString();

let digitsCount = num.length;

console.log(`Total no of digits - ${digitsCount}.`);
