
let message = "Welcome to Thailand";

function logMessage(message) {
  message = "Hello everybody";
  console.log(message); // *
}

logMessage(message);
console.log(message); // **

let name = "John";

function sayHi(input) {
  console.log(name); // ***
  name = input;
}

sayHi();
console.log(name); // ****
