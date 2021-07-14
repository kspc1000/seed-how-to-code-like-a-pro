/*
* Unpack values from an array easily
*/

const array = ["A", 1];
/* Using index: */
// const letter = array[0]; // A
// const number = array[1]; // 1

/* Destructuring: */
const [letter, number] = array;
console.log(letter); // A
console.log(number) // 1