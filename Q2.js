//2. Write a JavaScript program to convert temperatures to and from Celsius,Fahrenheit.

const prompt = require('prompt-sync')();

var c = prompt("Enter temperature in Celcius ");

let f = c*(9/5)+32;

console.log("The temperature in Fahrenheit is "+f);
