// You will be provided with an initial array (the first argument in the destroyer function),
// followed by one or more arguments. Remove all elements from the initial array that are of the same value
// as these arguments.


// TODO using arguments obj and Array.from()
function destroyer(arr) {
    let arr_from_obj = Array.from(arguments).slice(1);
    return arr.filter(item => !arr_from_obj.includes(item));
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
console.log(destroyer([2, 3, 2, 3], 2, 3));

// TODO using rest operator(...), not spread
// function destroyer(arr, ...valsToRemove) { //The rest parameter(...) syntax allows a function to accept an indefinite
//     // number of arguments as an array
//     return arr.filter(elem => !valsToRemove.includes(elem));
// }
//
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
// console.log(destroyer([2, 3, 2, 3], 2, 3));

//TODO: For Loop
// function destroyer(arr) {
//     let arr_from_obj = Object.values(arguments).slice(1);
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < arr_from_obj.length; j++) {
//             if (arr[i] === arr_from_obj[j]) {
//                 delete arr[i];
//             }
//         }
//     }
//     return arr.filter(item => item !== null);
// }
//
// console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
// console.log(destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3));
// console.log(destroyer([2, 3, 2, 3], 2, 3));

