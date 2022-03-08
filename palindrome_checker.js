// Palindrome Checker
// Return true if the given string is a palindrome. Otherwise, return false.
//
// A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation,
// case, and spacing.
//
// Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into
// the same case (lower or upper case) in order to check for palindromes.
//
// We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.
//
// We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.
// explanation:
//https://forum.freecodecamp.org/t/can-anyone-explain-regex/173252
// https://forum.freecodecamp.org/t/solution-explanation-please-check-for-palindromes/147628/2
//TODO:
// let result = text.replace(/blue|house|car/gi, function (x) {
//     return x.toUpperCase();
// });
function palindrome(str) {
    const reg = /[\W\s_]+/g;
    let bool = true;
    str = str.toLowerCase().replace(reg, '');
    for (let i = 0; i < str.length; i++) {
        if (str[i] !== str[str.length - 1 - i]) {
            bool = false;
        }
    }
    return bool;
}

console.log(palindrome("_Eye"));
console.log(palindrome("not a palindrome")) // should return false
