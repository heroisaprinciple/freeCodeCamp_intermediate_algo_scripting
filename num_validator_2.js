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
    const reg = new RegExp(/^1? ?(( ?\d{3}[- ]*)|(\( ?\d{3}[- ]*\) *))\d{3}[- ]?\d{4}$/g);
    /*
    1? means optional (1 can be in the beginning of the string or may not)
     ? means optional space
     ? optional space again
    \d{3} means d which repeats 3 times
    [- ] means dash or space after 3 d's
    * any amount of dashes or spaces
    or the same thing with parentheses
    then 3 characters again
    [- ]? means dash or space after 3 d's but optional
    \d{4}$ d repeated 4 times in the end
     */
    return reg.test(str);
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