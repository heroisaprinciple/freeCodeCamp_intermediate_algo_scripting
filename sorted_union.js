function uniteUnique(arr) { //arguments
    let new_arr = [];
    let args_arr = Array.from(arguments);
    for (let i = 0; i < args_arr.length; i++) {
        new_arr = new_arr.concat(args_arr[i]);
    }
    let set = Array.from(new Set(new_arr));
    return set;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1])); //[1, 3, 2, 5, 4]
console.log(uniteUnique([1, 2, 3], [5, 2, 1])); //[1, 2, 3, 5]
console.log(uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8])); //[1, 2, 3, 5, 4, 6, 7, 8]