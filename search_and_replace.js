/*
Code Explanation
In this solution, regular expression ^[A-Z] is used to check (test) if the first character of before is uppercase.
    If first letter of before is capitalized, change the first letter of after to uppercase.
    Else: If first letter of before is lowercase, change the first letter of after to lowercase
Return the new string replacing before with after.
*/
function myReplace(str, before, after) {
   const reg = /^[A-Z]/g;
   if (reg.test(before)) {
       after = after[0].toUpperCase() + after.slice(1);
   }
   else {
       after = after[0].toLowerCase() + after.slice(1);
   }
   return str.replace(before, after);
}

console.log(myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));
console.log(myReplace("I think we should look up there", "up", "Down"));
console.log(myReplace("His name is Tom", "Tom", "john"));
console.log(myReplace("Let us get back to more Coding", "Coding", "algorithms"));

