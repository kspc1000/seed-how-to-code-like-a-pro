/*
 * Some explanation of arrow functions
 * An arrow function works exactly the same as a normal function
 * with one exception regarding the "this" keyword (Not very important but just a note https://www.w3schools.com/js/js_arrow_function.asp)
 * It's defined using "=>" instead of "function".
 * Read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
 */

// 1) Let's say I have a function that simply takes in 1 parameter and returns it with some text prepended.
// In this case, simply "Hello name!" with the name variable passed in.
const getHelloText = (name) => { // Very similar to a normal function, just different way of declaring
    return `Hello ${name}!`;
}

console.log(getHelloText(`John`));

// 2) If the arrow function only takes in 1 parameter, the brackets can be omitted.
const getHelloText2 = name => {
    return `Hello ${name}!`;
}

console.log(getHelloText(`Jack`));

// 3) If the arrow function has only 1 line of code:
// - Curly braces can be omitted
// - If curly braces are omitted, the arrow function will explicitly return what is written, hence the return keyword can be removed.
const getHelloText3 = name => `Hello ${name}!`; // A much cleaner function implemented on 1 line.

console.log(getHelloText3(`Jill`));

// 4) If the arrow function has no parameters, just write the parenthesis with nothing inside, just like a normal function.
const printHelloWorld = () => console.log(`Hello World!`);

printHelloWorld();