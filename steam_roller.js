function steamrollArray(arr) {
    //TODO: working with loop
    // let final_arr = [];
    // for (let i = 0; i < arr.length; i++) {
    //     if (Array.isArray(arr[i])) {
    //         final_arr.push(...steamrollArray(arr[i]));
    //     }
    //     else {
    //         final_arr.push(arr[i]);
    //     }
    // }
    // return final_arr;

    //TODO: some + concat
    // let final_arr = [].concat(...arr);
    // return final_arr.some(Array.isArray) ? steamrollArray(final_arr) : final_arr; // some returns true if at least one
    // el is under condition

    //TODO: toString + replace
    // Analysis of toString() method
    // Consider the following code
    //
    // var myObj    = {lhs: 3, rhs: 2};
    // var myFunc   = function(){}
    // var myString = "This is a sample String";
    // var myNumber = 4;
    // var myArray  = [2, 3, 5];
    //
    // myObj.toString();     // "[object Object]"

    return arr.toString().replace(',,', ',').split(',').map(function(val) {
        if (val === '[object Object]') { return {} } //this is why we have '[object Object]' (explanation is up) not
            //typeof val === object
        else if (isNaN(val)) { return val; } // if there is an actual string
        else { return parseInt(val)} // if there is a number which is string
    })
}

console.log(steamrollArray([[["a"]], [["b"]]])); // ["a", "b"]
console.log(steamrollArray([1, [2], [3, [[4]]]])); // [1, 2, 3, 4]
console.log(steamrollArray([1, [], [3, [[4]]]])); // [1, 3, 4]
console.log(steamrollArray([1, {}, [3, [[4]]]])); // [1, {}, 3, 4].
