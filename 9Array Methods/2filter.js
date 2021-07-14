/*
 * Array.filter() takes in a callback function that is called with every element in the array.
 * The element will be added to a new array if the condition in the callback function returns true.
 * The .filter() function returns the new array with the elements that pass the condition.
 * The first parameter of the callback function is the current element of the array. (In this case: price)
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
 */

// An array of prices of 10 items in a store
const prices = [2.0, 14.8, 33.01, 63.66, 73.38, 85.12, 99.94, 108.5, 146.63, 175.25];

/* 
    To get an array of items where:
    1) The price is smaller than $100
    2) The price is between $80 and $120 exclusive
    3) The price is just $2
*/

//* Normally we would use a for loop with an if statement 
const cheapPrices = [], mediumPrices = [], daisoPrices = [];
for (let i = 0; i < prices.length; i++) {
    if (prices[i] < 100) {
        cheapPrices.push(prices[i])
    }
    if (prices[i] > 80 && prices[i] < 120) {
        mediumPrices.push(prices[i])
    }
    if (prices[i] === 2) {
        daisoPrices.push(prices[i])
    }
}

//* But with .filter() we can do it in one line
// Get all the prices that are smaller than 100
const cheapPrices2 = prices.filter(price => price < 100); // provide the condition in the callback function

// Get all the prices that are bigger than 80 but less than 120
const mediumPrices2 = prices.filter(price => price > 80 && price < 120); // provide the condition in the callback function

// Get all the daiso prices
const daisoPrices2 = prices.filter(price => price === 2); // provide the condition in the callback function

console.log(`\x1b[38;2;255;33;44mcheapPrices = [${cheapPrices}]`); // [2.0, 14.8, 33.01, 63.66, 73.38, 85.12, 99.94]
console.log(`cheapPrices2 = [${cheapPrices2}]`); // [2.0, 14.8, 33.01, 63.66, 73.38, 85.12, 99.94]

console.log(`\x1b[32mmediumPrices = [${mediumPrices}]`); // [14.8, 33.01, 63.66, 73.38, 85.12, 99.94]
console.log(`mediumPrices2 = [${mediumPrices2}]`); // [ 85.12, 99.94, 108.5 ]

console.log(`\x1b[38;2;0;180;255mdaisoPrices = [${daisoPrices}]`) // [2] (Only 1 element is of $2 value)
console.log(`daisoPrices2 = [${daisoPrices2}]\x1b[0m`) // [2] (Only 1 element is of $2 value)