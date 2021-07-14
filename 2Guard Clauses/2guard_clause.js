/*
* Guard clauses are used in functions to make code shorter/cleaner
* Makes use of the "return" statement to remove the "else" keyword
* A series of guard clauses make code much cleaner then a bunch of nested if-else statements
* Extra resource: https://www.youtube.com/watch?v=EumXak7TyQ0
*/

/* Simple Example */
function getEmotion(emoji) {
    if (emoji === "😊") {
        return "Happy";
    }
    else {
        return "Not happy";
    }
}

function getEmotion2(emoji) {
    if (emoji === "😊") {
        return "Happy";
    }
    return "Not happy"; //removing the else statement works since returning will exit the function
}