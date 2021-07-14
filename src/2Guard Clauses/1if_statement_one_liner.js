/*
* Demo of If statement in one line 
*/

// javascript has curly bracket syntax, so we usually write code like this:
let condition = true;
if (condition) {
    doSomething()
}
// however, if-block's code is only one line, we can remove the curly brackets
// You may already know that removing the curly brackets causes the if statement to only run the next line if the condition is true
if (condition) 
    doSomething()

// and we can put it all into 1 line, and the if statement will just run that one line if the condition is true
if (condition) doSomething()



function doSomething() {} // does nothing, for demonstrating purposes