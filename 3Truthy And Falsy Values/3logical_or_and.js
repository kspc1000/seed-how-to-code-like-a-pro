/* Not so important but good to know */
/* Logical OR (||) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR */
console.log(0 || 1)
console.log([] || {})

const data = ["random"];
function getData(data) {
    if (data) {
        return data;
    }
    else {
        return "No Data";
    }
}

function getData2(data) {
    return data || "No Data"; // much simpler and shorter compared to getData()
}
console.log(getData(data));
console.log(getData2(data));

/* Logical AND (&&) https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND */
console.log(0 && 1)
console.log([] && {})

// Curious to know why the outputs are like that? You can click on the link to find out more