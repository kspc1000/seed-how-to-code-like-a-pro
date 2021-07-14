/* Longer Example */
function isNumber(number) { // using nested if-else statements
    if (number != null) {
        if (number < 0) {
            return "negative"
        }
        else if (number === 0) {
            return "zero"
        }
        else {
            return "positive"
        }
    }
    else {
        console.log("number is null!");
    }
}
console.log(isNumber(10));

function isNumber2() { //using guard clauses
    if (number === null) return console.log("number is null!"); //any code that is only 1 line can be written after the return, even if it's not a value, and the whole if statement thing can be written in one line
    if (number < 0) return "negative";
    if (number === 0) return "zero";
    return "positive";
}
console.log(isNumber2(10));