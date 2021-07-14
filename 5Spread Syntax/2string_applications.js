/*
 * Note: spread syntax is less commonly used with strings, usually arrays/objects
 */
const fruit = "apple";

// Characters of string into array
const fruitCharacters = fruit.split(""); //using split with an empty string
const fruitCharacters2 = [...fruit] //puts all characters of the string into a new array
console.log(fruitCharacters)
console.log(fruitCharacters2)