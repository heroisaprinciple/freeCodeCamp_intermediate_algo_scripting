 // Sum All Primes
// A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime
 // number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.
//
// Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.



 // Our primality checking function returns false if the target number is divisible by any number in between 2 and
 // the square root of the target number. We only need to check up to the square root because the square root of a number
 // is the largest possible unique divisor.
 function findingPrimes(num) { // primality checking func
     for (let i = 2; i <= Math.sqrt(num); i++) {
         if (num % i === 0) {
             return false;
         }
     }
     return true;
 }

 function sumPrimes(num) { //checking if all nums are prime and if yes, sum them
    let sum = 0;
    for (let i = 2; i <= num; i++) {
        if (findingPrimes(i)) {
            sum += i;
        }
    }
    return sum;
 }
 console.log(sumPrimes(10)); // 2 + 3 + 5 + 7 = 17