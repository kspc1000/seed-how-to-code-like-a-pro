/*
 * Applications of spread syntax on arrays
 */
let numbers = [1, 2, 3, 4];

/* Create a copy/clone of an array */
let numbersCopy = [...numbers]; // by wrapping square brackets around ...numbers, it puts all of the elements of the numbers array into a new array
console.log(numbersCopy)

/* append items into an array manually */
numbers.push(5)
numbersCopy = [...numbersCopy, 5]; //equavalent to doing .push(5)
console.log(numbers)
console.log(numbersCopy) // both numbers and numbersCopy will be the same

/* adding items to an array dynamically */
numbers.unshift(0); // add 0 to the front of the array
numbers.push(6, 7); // add 6 and 7 to the end of the array
numbersCopy = [0, ...numbersCopy, 6, 7]; // from 2 lines into 1 line as compared to using unshift and push
console.log(numbers)
console.log(numbersCopy) // both numbers and numbersCopy will be the same

/* You could do it using multiple arrays as well*/
// ### shows how flexible it can be
const negativeNumbers = [-9, -8, -7, -6, -5, -4, -3, -2, -1];
const positiveNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const negativeAndPositiveNumbers = negativeNumbers.concat(positiveNumbers); //concat 2 arrays
const allNumbers = [...negativeNumbers, 0, ...positiveNumbers] //### concats both arrays while adding a 0 in between
console.log(negativeAndPositiveNumbers)
console.log(allNumbers)

/* Getting the largest or smallest number of an array */
//! Don't do this (for loop)
let highest = numbers[0], lowest = numbers[0];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > highest) highest = numbers[i];
    if (numbers[i] < lowest) lowest = numbers[i];
}
console.log(`Largest number: ${highest}\tSmallest number: ${lowest}`);

//* Do this (short and sweet one liner)
highest = Math.max(...numbers);
lowest = Math.min(...numbers);
console.log(`Largest number: ${highest}\tSmallest number: ${lowest}`);