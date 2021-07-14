/*
* Template literals, an easier and more modern/better way of formatting strings.
* Read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals
*/
const person = "Stella"
const age = 17;

/* Bad string code */
console.log(person + " is " + age + " years old");

/* Good string code */
console.log(`${person} is ${age} years old`);