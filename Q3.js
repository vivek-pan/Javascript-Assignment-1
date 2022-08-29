//3. Write a program to find the factorial of a number.

const prompt = require('prompt-sync')();

var num = prompt("Enter a number ");

let factorial = 1;
for(i=1;i<=num;i++){
    factorial = factorial*i;
}

console.log("The factorial is "+factorial);