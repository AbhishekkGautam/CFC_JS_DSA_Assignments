let readlineSync = require("readline-sync");

let numOne = readlineSync.question("Enter first number - ");
let numTwo = readlineSync.question("Enter second number - ");

if (numOne > numTwo) {
  while (numTwo > 0) {
    rem = numOne % numTwo;
    numOne = numTwo;
    numTwo = rem;
  }
  console.log(`GCD is ${numOne}.`);
} else {
  while (numOne > 0) {
    rem = numTwo % numOne;
    numTwo = numOne;
    numOne = rem;
  }
  console.log(`GCD is ${numTwo}.`);
}
