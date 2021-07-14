/* More Examples */

// Multiplication Table of 5 from 1 to 10
let multiplicationTable = "";
for (let i = 1; i <= 10; i++) {
    multiplicationTable += `${i} x 5 = ${i * 5}\n`;
}
console.log(multiplicationTable)

// arrays
const lengths = [10, 5, 8];
const widths = [2, 7, 9];
for (let i = 0; i < lengths.length; i++) {
    console.log(`Area for rectangle ${i + 1} is ${lengths[i] * widths[i]}`)
}

// number.toString()
const number = 9;
console.log(number + "" === number.toString()) // 9 + "" = "9"
console.log(`${number}` === number.toString()) // can use `${variable}` to convert the variable to a string as well