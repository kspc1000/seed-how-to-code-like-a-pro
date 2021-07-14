/* Some Applications */

// Getting the total sum of an array easily can allow for us to get the average easily too
const getAverage = array => array.reduce((acc, cur) => acc + cur) / array.length;
console.log(getAverage([1, 2, 3, 4, 5]));

// Common elements of 2 arrays
const intersectionOfArrays = (arr1, arr2) => arr1.filter(v => arr2.includes(v));
console.log(intersectionOfArrays([1, 2, 3, 4], [3, 4, 5, 6]));