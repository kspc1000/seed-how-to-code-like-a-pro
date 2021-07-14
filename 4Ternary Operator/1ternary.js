/*
* Ternary operator, a shortened if-else statement that can be expressed in 1 line.
* Can also be chained to multiple if-else statements.
*/

const person = "Stella"
const age = 17;

/* Using if else*/
let str;
if (age >= 18) {
    str = "old enough"
}
else {
    str = "too young"
}
console.log(`${person} is ${str} to drink`);

/* using ternary */
str = age >= 18 ? "old enough" : "too young";
console.log(`${person} is ${str} to drink`);
console.log(`${person} is ${age >= 18 ? "old enough" : "too young"} to drink`);