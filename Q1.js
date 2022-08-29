//1. Write a program to find whether a given year is a leap year or not.

const prompt = require('prompt-sync')();

var year = prompt("Enter a year ");

if(year%400 == 0)
    console.log(year + " leap year");

else if(year%100 == 0)
    console.log(year +" Not leap year");

else if(year%4 == 0)
    console.log(year +" leap year");

else
    console.log(year +" Not leap year");