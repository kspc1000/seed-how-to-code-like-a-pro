/*
 * Array.map() takes in a callback function that is called with every element in the array.
 * Each element will be mapped to whatever value the callback function returns.
 * The first parameter of the callback function is the current element of the array. (In this case: price)
 * Note that the name of the parameters of the callback function does not matter
 * Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
 */

// An array of prices of 10 items in a store
const prices = [2.0, 14.8, 33.01, 63.66, 73.38, 85.12, 99.94, 108.5, 146.63, 175.25];

/*
    Apply a 10% discount to each item in the array
*/

//* Normally we would use a for loop
const discountedPrices = [];
for (let i = 0; i < prices.length; i++) {   
    discountedPrices.push(prices[i] * 0.9);
}

//* But with .map():
// Using a named normal function
function getDiscountedPrice(price) { // The first argument of the callback function is the current item of the array in each iteration
    return price * 0.9;
}
const discountedPrices2 = prices.map(getDiscountedPrice); // pass in the name of the function declared

// Declare the function directly in the argument
const discountedPrices3 = prices.map(function(price) { // passing in the function directly (Notice how this function does not have a name, it's called an anonymous function)
    return price * 0.9;
})


//* Using arrow function: With .map(), we can do it one line
// Reccomended to be anonymous when providing callback functions because we would most likely only use them once
// In this case, we only need to use 1 parameter, hence brackets can be omitted: price => ... instead of (price) => ...
// Since there is only 1 statement in the arrow function, we can omit the curly braces, and put everything in one line
const discountedPrices4 = prices.map(price => price * 0.9); // Very clean and nice one liner (Anonymous arrow function)

// Display the arrays of discounted prices (All have the same output)
console.log(discountedPrices); // [1.8, 13.32, 29.709, 57.294, 66.042, 76.608, 89.946, 97.65, 131.967, 157.725]
console.log(discountedPrices2);
console.log(discountedPrices3);
console.log(discountedPrices4);
