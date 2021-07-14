/* More examples for demonstration on how truthy and falsy values work */

/* I want to test if an array has any items in it: check it's length */
const arr = [];

// By using length === 0
if (arr.length !== 0) { // check if it is not equal to zero
    console.log("array contains at least 1 item");
}
else {
    console.log("array is empty");
}

// By simply using just length
if (arr.length) { // since arr.length is zero, zero is a falsy value, hence the condition will be false
    console.log("array contains at least 1 item");
}
else {
    console.log("array is empty"); // hence this will be printed
}
// Both ways should print that the array is empty


/* With Modulus, example with odd and even */
const number = 5;

// By using number % 2 !== 0
if (number % 2 === 1) { // check if it is equal to 1 (Not equal to 0 also works)
    console.log("number is odd");
}
else {
    console.log("number is even");
}

// By simply using number % 2
if (number % 2) { // if the number is an odd number, number % 2 will give 1 and it is a truthy value, hence condition = true
    console.log("number is odd");
}
else {
    console.log("number is even");
}

// Using the comparisons (e.g. arr.length === 0 instead of just arr.length) are still fine

/*
str.match()
Read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match
*/
const str = "alpha";
const regex = "a";
if (str.match(regex)) {
    console.log(`${str} contains ${regex}`);
}
/*
Questions for self-evaluation:
1) What is the return type of the .match() function?
2) Is the return value a truthy value or a falsy value?
*/