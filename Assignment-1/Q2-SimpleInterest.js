let readlineSync = require("readline-sync");

let amount = readlineSync.question("Enter amount - ");
let rate = readlineSync.question("Enter rate of interest - ");
let time = readlineSync.question("Enter time - ");

let simpleInterest = (amount * rate * time) / 100;

console.log(`Simple Interest is ${simpleInterest}.`);
