// Arguments Optional
// Create a function that sums two arguments together. If only one argument is provided, then return a function that
// expects one argument and returns the sum.
//
// For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.
//
// Calling this returned function with a single argument will then return the sum:
//
// var sumTwoAnd = addTogether(2);
// sumTwoAnd(3) returns 5.
//
// If either argument isn't a valid number, return undefined.

function addTogether() {
    let arr = Array.from(arguments);
    let first = arr[0];
    let second = arr[1];
    let sum = 0;
    //first arg is not a number
    if (typeof first !== 'number') { return undefined; } // if first arg is not defined
    else if (second === undefined) { //if first arg is a number && second is not defined
        const check = (second) => {
            return typeof second !== 'number' ? undefined : first + second;
        }
        return check;
    }
    else if (typeof second !== 'number') { return undefined }
    else if (typeof first === 'number' && typeof second === 'number') {
        if (arr.length === 2) {
            sum = arr.reduce((a, b) => a + b);
        }
    }
    return sum;
}

console.log(addTogether(2,3)); //5
console.log(addTogether(2)); //
console.log(addTogether("https://www.youtube.com/watch?v=dQw4w9WgXcQ")); //undefined
console.log(addTogether(2, "3")); //undefined
console.log(addTogether(2)([3])); // undefined
console.log(addTogether(5)(7)); //12