// Everything Be True
// Check if the predicate (second argument) is truthy on all elements of a collection (first argument).
//
// In other words, you are given an array collection of objects. The predicate pre will be an object property and you need to return true
// if its value is truthy. Otherwise, return false.
//
//     In JavaScript, truthy values are values that translate to true when evaluated in a Boolean context.
//
//     Remember, you can access object properties through either dot notation or [] notation.


//TODO: using loops
// function truthCheck(collection, pre) {
//     let count = 0;
//     for (let i = 0; i < collection.length; i++) {
//         if (collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])) {
//             count++;
//         }
//     }
//     return count === collection.length;
// }
//


//TODO: using every
function truthCheck(collection, pre) {
   return collection.every(obj => obj[pre]);
}


console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"},
    {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")); //true

console.log(truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy"},
    {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")); //false
