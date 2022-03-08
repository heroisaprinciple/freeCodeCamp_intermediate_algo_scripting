//
// Pig Latin is a way of altering English Words. The rules are as follows:
//
//  - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the
// word, and add ay to it.
//
// - If a word begins with a vowel, just add way at the end.
//
//  Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.
function translatePigLatin(str) {
    let consonant_reg = new RegExp(/[^aeiou^\d\W]+/gi);
    let vowel_reg = new RegExp(/^[auieo]/g); // or try ^[...]
    let start = '';
    // starts with a cons
    if (str.match(vowel_reg)) {
        str = str + 'way';
    }
    // Array with the matched string as the first element, which is all we want. Grab it with [0]

    //Now, we can start building our Pig Latin string to return. This can be built in three parts:
        // The first part contains all of the characters in the original string, starting from the first vowel.
        // We can easily get these characters by creating a substring of the original string, with its starting index
        // being the first vowel.

        // The second part contains the consonant string we just built. (If you add the second and first parts of this
        // string together, you will get the original string.)

    //    The final part contains “ay”.
    else if (str.match(consonant_reg)) {
        start = str.match(consonant_reg)[0]; //+ means further...this str means 'gl' in 'glove'...line 18
        str = str.substring(start.length) + start + 'ay' // returns the original string that supposed to be (line 20)


    }
    return str;
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("algorithm"));
console.log(translatePigLatin("glove")); //oveglay
console.log(translatePigLatin("schwartz")); //artzschway (first vowel comes in the middle)
console.log(translatePigLatin("rhytm")); //rhytmay (no vowels)

//TODO or
// function translatePigLatin(str) {
//     return str.replace(/^[auieo]\w+/g, '$&way').replace(/(^[^[auieo]+)(\w*)/, '$2$1ay'); // & means the word
// }
//
// console.log(translatePigLatin("consonant"));
// console.log(translatePigLatin("algorithm"));
// console.log(translatePigLatin("glove")); //oveglay
// console.log(translatePigLatin("schwartz")); //artzschway (first vowel comes in the middle)
// console.log(translatePigLatin("rhytm")); //rhytmay (no vowels)