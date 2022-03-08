/*
Return true if the passed string looks like a valid US phone number.

The user may fill out the form field any way they choose as long as it has the format of a valid US number.
The following are examples of valid formats for US numbers (refer to the tests below for other variants):

555-555-5555
(555)555-5555
(555) 555-5555
555 555 5555
5555555555
1 555 555 5555
For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf.
Your job is to validate or reject the US phone number based on any combination of the formats provided above.
 The area code is required. If the country code is provided, you must confirm that the country code is 1.
 Return true if the string is a valid US phone number; otherwise return false.
 */

function telephoneCheck(str) {
    let bool = false;
    if (str.indexOf('(') === -1 && str.indexOf(')') > -1) { return bool; } // in case of
    // "1 555)555-5555" (not having '(' at all)

    if (str.indexOf(')') - str.indexOf('(') >= 5) { return bool;} // in case of "1 (555) 555-5555"

    if (str[0] === '-') { return bool; }

    if (str.match(/-/g) && str.match(/-/g).length > 2) { //in case of '55 55-55-555-5'
        return bool;
    }

    const no_spaces = new RegExp(/-|\s/g); //reducing dashes and spaces in a string
    ///-|[\s\(|\)]/g

    let cleaned = str.replace(no_spaces, '');
    if (cleaned.indexOf('(') < cleaned.indexOf(')')) { //in case of having both parentheses
        cleaned = cleaned.replace(/-|[\s\(|\)]/g, ''); //in order to match parentheses, we should use backslashes
    }
    if (cleaned.length === 10) {
        bool = true;
    }
    else if (cleaned.length === 11 && cleaned[0] === '1') { bool = true; } //if we use cleaned[0] === 1, that
    // leads to false (because of strict evaluation (===))

    return bool;
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("(555) 555-5555"));
console.log(telephoneCheck("555 555 5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("1 555)555-5555")); //false
console.log(telephoneCheck("(6054756961)")); //false
console.log(telephoneCheck("-1 (757) 622-7382")); //false
console.log(telephoneCheck("2 757 622-7382")); //false
console.log(telephoneCheck("(555-555-5555")); //false
console.log(telephoneCheck("5555555")); //false
console.log(telephoneCheck("55 55-55-555-5")); //false --



