const today = new Date().toLocaleDateString();
// Retreive the month, day, and year as separate values
const [month, day, year] = today.split("/");
console.log(today);
console.log(`month = ${month}`);
console.log(`day = ${day}`);
console.log(`year = ${year}`);