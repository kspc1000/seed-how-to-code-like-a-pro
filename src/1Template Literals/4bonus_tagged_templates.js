/* Bonus: Tagged Templates */
function isRetireeAge(strings, person, age) {
    return `${strings[0]}${person}${strings[1]}${age > 63 ? "above" : age === 63 ? "at" : "below"}${strings[2]}`
}
console.log(isRetireeAge`Currently ${person} is ${age} retirement age`);