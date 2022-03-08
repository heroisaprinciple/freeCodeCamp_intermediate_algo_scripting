// Roman Numeral Converter
// Convert the given number into a roman numeral.
//
// All roman numerals answers should be provided in upper-case.

function convertToRoman(num) {
    let res = '';
    const obj = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    }
    //TODO: using for...in
    for (let key in obj) {
        while (num >= obj[key]) {
            res += key;
            num -= obj[key];
        }
    }


    //TODO: using Object.keys and for..of
    // for (let key of Object.keys(obj)) {
    //     let count = Math.floor(num / obj[key]);
    //     num -= count * obj[key];
    //     res += key.repeat(count);
    // }
    return res;
}
console.log(convertToRoman(10));
console.log(convertToRoman(100));
console.log(convertToRoman(36)); //XXXVI
console.log(convertToRoman(68)); //LXVIII
