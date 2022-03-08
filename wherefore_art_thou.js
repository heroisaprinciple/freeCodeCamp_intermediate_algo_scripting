// Make a function that looks through an array of objects (first argument) and returns an array of all
// objects that have matching name and value pairs (second argument). Each name and value pair of the source object
// has to be present in the object from the collection if it is to be included in the returned array.
//
//     For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
//     { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" },
// then you must return the third object from the array (the first argument), because it contains the name and its value,
//     that was passed on as the second argument.
//
// Code Explanation
// We filter through the array using .filter().
//     Using a for loop we loop through each item in the object.

//     We use a if statement to check if the object in the collection doesn’t have the key and the property value
//     doesn’t match the value in source.

//     We return false if the above if statement is correct. Otherwise, we return true;

function whatIsInAName(collection, source) {
    let arr = [];
    let search_arr = Object.keys(source); // ['last']
    return collection.filter((obj) =>  {
      for  (let i = 0; i < search_arr.length; i++) {
          if (!obj.hasOwnProperty(search_arr[i]) || obj[search_arr[i]] !== source[search_arr[i]]) {
              return false;
          }
      }
      return true;
    })
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
