// Spinal Tap Case
// Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.

//look also at .match which returns smth accepted by reg in the array

// Code Explanation
// regex contains the regular expression /\s+|_+/g, which will select all white spaces and underscores.
// The first replace() puts a space before any encountered uppercase characters in the string str so that the spaces
// can be replaced by dashes later on.
//     While returning the string, another replace() replaces spaces and underscores with dashes using regex.

//about $1 $2:
// It’s the first and the second capturing groups.
//
// In regex, you can put a pattern in brackets (()). The brackets specify a capturing group: whatever matches
// in that group is “captured”, and then you can use $1, $2 etc to access the first, second etc groups.

// /([a-z])([A-Z])/g
// So this captures
// one character a-z, one character A-Z
//
// If the whole pattern matches, you can then use the reference to the relevant capturing group


function spinalCase(str) {
    const reg = new RegExp(/\s+|_+/g);
    str = str.replace(/([a-z])([A-Z])/g, '$1 $2');
    return str.toLowerCase().replaceAll(reg, '-');
}

console.log(spinalCase('This Is Spinal Tap'));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));