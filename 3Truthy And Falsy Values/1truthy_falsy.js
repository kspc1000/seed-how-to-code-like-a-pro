/* 
* Truthy & Falsy values, not very important, but a good to know.
* Falsy values are false, 0, "", null, undefined, NaN
* Truty values are any values that are not a Falsy value
* Read more at
* https://developer.mozilla.org/en-US/docs/Glossary/Truthy
* https://developer.mozilla.org/en-US/docs/Glossary/Falsy
*/

/* if (condition) */
if (0) { // coerced/converted to false
    console.log("truthy")
}
else console.log("falsy")

if (1) { // coerced to true
    console.log("truthy")
}
else console.log("falsy")

if ([]) { // coerced to true
    console.log(true);
}
else console.log(false);

/* You can see if a value is truthy or falsy by putting !! in front of it */
console.log(!! 0) // false
console.log(!! 1) // true