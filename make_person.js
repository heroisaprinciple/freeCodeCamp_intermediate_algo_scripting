// Make a Person
// Fill in the object constructor with the following methods below:
//
// getFirstName()
// getLastName()
// getFullName()
// setFirstName(first)
// setLastName(last)
// setFullName(firstAndLast)
// Run the tests to see the expected output for each method.
//
//     The methods that take an argument must accept only one argument and it has to be a string.
//     These methods must be the only available means of interacting with the object.

const Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let full_name = firstAndLast;
    this.getFirstName = function() {
        return full_name.split(' ')[0];
    }
    this.setFirstName = function(name) {
        full_name = name + " " + full_name.split(' ')[1];
    }
    this.getLastName = function() {
        return full_name.split(' ')[1];
    }
    this.setLastName = function(name) {
        full_name = full_name.split(' ')[0] + " " + name;
    }
    this.getFullName = function() {
        return full_name;
    }
    this.setFullName = function(name) {
        full_name = name;
    }
};

const bob = new Person('Bob Ross');
const haskell = new Person('Haskell Ross');
console.log(bob.getFullName());

console.log(bob.setLastName());
console.log(haskell.getFullName());