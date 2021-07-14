/*
 * Applications of spread syntax on objects
 * If you have not learnt classes and objects yet, ignore this
*/

let student = {
    name: "Stella",
    age: 17,
    gender: "female"
} //this is a shortcut to create an object without creating a class, note you'll need to use classes in assignment if required.
console.log(student);

// Adding properties to an object
student = {
    ...student,
    height: 170,
    weight: 45
} //creates a new object with new properties and re-assigns it to student with all it's current properties
console.log(student)

// Or create a new object with all the properties of an already given object
const studentTemplate = { age: 17, gender: "male" }; //let's say all the objects we are creating will be 17-year-old boys
const mike = { ...studentTemplate, name: "mike", height: 180, weight: 50 };
const jack = { ...studentTemplate, name: "jack", height: 179, weight: 48 };
console.log(mike, jack)