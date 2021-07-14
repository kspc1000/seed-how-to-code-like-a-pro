/*
 * Array.reduce() takes in a callback function that is called with every element in the array.
 * 1st parameter: accumulator (Usually named as acc)
 * 2nd parameter: current element (Usually named as cur)
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
 */

// An array of prices of 10 items in a store
const prices = [2.0, 14.8, 33.01, 63.66, 73.38, 85.12, 99.94, 108.5, 146.63, 175.25];

/*
    Get sum of all the prices (all values in the array added together)
*/

//* Normally with a for loop:
let sum = 0;
for (let i = 0; i < prices.length; i++) {
    sum += prices[i];
}
console.log(`sum = ${sum}`); // Total sum of all prices

//* But with Array.reduce():
let sum2 = prices.reduce((sum, price) => sum + price); // Total sum of all prices
console.log(`sum2 = ${sum2}`);