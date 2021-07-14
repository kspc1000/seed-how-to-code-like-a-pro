/* Chaining if else statements with ternary */
const age = 17;
let ageStage = (
    age < 1 ? "New born" //if (age < 1) str = "new born"
    : age <= 4 ? "Toddler" //else if (age < 5) str = "Toddler"
    : age < 12 ? "Student"
    : age <= 18 ? "Teenager"
    : "adult"
)
console.log(ageStage) // Teenager