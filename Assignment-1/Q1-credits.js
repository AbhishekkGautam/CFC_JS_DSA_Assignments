let readlineSync = require("readline-sync");

let credits = readlineSync.question("Enter your credit scrore - ");

if (credits >= 7500) {
  console.log("Congrats! You earned TERA LEADER badge.");
} else if (credits >= 6000) {
  console.log("Congrats! You earned GEGA LEADER badge.");
} else if (credits >= 4500) {
  console.log("Congrats! You earned MEGA LEADER badge, Keep Shining.");
} else {
  console.log("Congrats! You earned RISING STAR badge, Keep Rising.");
}
