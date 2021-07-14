/* A very quick way to swap variables using the array destructuring technique */
const print = (str, a, b) => console.log(`${str}a = ${a}, b = ${b}`);
let a = 0;
let b = 1;
print("Original: ", a, b); // a = 0, b = 1

// Normal variable swapping
let temporaryVariable = a; // usually set a temporary variable to hold the value of one variable
a = b;
b = temporaryVariable;
print("Swapped: ", a, b); // a = 1, b = 0 (Variables have been swapped)

// Making use of array desctructuring
[a, b] = [b, a]; // swaps by setting a to b and b to a
print("Swapped again: ", a, b) // a = 0, b = 1 (Variables have been swapped to original)