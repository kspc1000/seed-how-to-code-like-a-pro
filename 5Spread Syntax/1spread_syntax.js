/*
* Spread syntax (...)
* Expands an iterable/splits up an iterable into it's individual elements
* Think of it as spreading over the value’s items: (characters for strings, elements in arrays, properties of objects)
*/

const numbers = [1, 2, 3, 4];
const fruit = "apple";
const student = { name: "Stella", age: 17 } //this is an object, ignore it if you haven't learnt classes and objects yet

console.log(...numbers); // outputs all the elements in the array
console.log(...fruit); // outputs all the characters of the string separately
console.log({ ...student }) // outputs all the properties of the object (and puts them in a new object)