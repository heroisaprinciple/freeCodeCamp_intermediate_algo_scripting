// Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all
// sequential numbers in the range between these parameters.
//
//     The range will be an array of two numbers that will not necessarily be in numerical order.
//
//     For example, if given 1 and 3, find the smallest common multiple of both 1 and 3 that is also evenly divisible by
// all numbers between 1 and 3. The answer here would be 6.


// In this solution, we check every multiple of the largest value in the range until we find a value that is divisible by
// every value in the range.
//
//     The upper bound for this loop is the product of all values in the provided range, because this number will be
// divisible by every value in the range.


    function smallestCommons(arr) {
    // Setup
    const [min, max] = arr.sort((a, b) => a - b);
    const numberDivisors = max - min + 1;
    // Largest possible value for SCM
    let upperBound = 1;
    for (let i = min; i <= max; i++) { //120 is a limit for all numbers
        upperBound *= i;
    }
    // Test all multiples of 'max'
    for (let multiple = max; multiple <= upperBound; multiple += max) {
        // Check if every value in range divides 'multiple'
        let divisorCount = 0;
        for (let i = min; i <= max; i++) {
            // Count divisors
            if (multiple % i === 0) {
                divisorCount += 1;
            }
        }
        if (divisorCount === numberDivisors) {
            return multiple;
        }
    }
}

console.log(smallestCommons([1, 5])); // 60