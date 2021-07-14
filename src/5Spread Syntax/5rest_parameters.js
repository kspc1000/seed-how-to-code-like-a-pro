/*
* Rest parameters (...params)
* Not so important, This is something abit more advanced (not very often used I think)
* Allows us to take in an infinite number of parameters; Pass in any number of arguments.
* Read more at https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters
*/

function getOddCount(...numbers) { //spread syntax in the parameters
    let count = 0;
    for (let i = 0; i < numbers.length; i++) if (numbers[i] % 2 !== 0) count++; // don't do one-liners like this :P
    return count;
}

console.log(getOddCount(10, 15, 28))

function getRepeatedString(times, ...strings) { // using spread syntax on the last parameter to accept previous parameters before that
    let output = "";
    for (let i = 0; i < strings.length; i++) {
        output += strings[i].repeat(times)
    }
    return output;
}

console.log(getRepeatedString(3, "a", "b", "c"))

/* Reason why rest paramaters not commonly used is most likely because we can just wrap the arguments in an array */
function getOddCount(numbers) {
    let count = 0;
    for (let i = 0; i < numbers.length; i++) if (numbers[i] % 2 !== 0) count++; // don't do one-liners like this :P
    return count;
}

console.log(getOddCount([10, 15, 28])) //array as argument

function getRepeatedString(times, strings) {
    let output = "";
    for (let i = 0; i < strings.length; i++) {
        output += strings[i].repeat(times)
    }
    return output;
}

console.log(getRepeatedString(3, ["a", "b", "c"])) // array as argument