/*
* Intro to function expressions and Arrow functions
* Read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions
* https://www.javascripttutorial.net/javascript-anonymous-functions/
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
*/

function double(num) { // normal function
    return num * 2;
}
console.log(double(10))

const double2 = function(num) { // This is a function expression, named as the variable it is assigned to
    return num * 2
}
console.log(double2(10))

const double3 = num => num * 2; // one liner arrow function