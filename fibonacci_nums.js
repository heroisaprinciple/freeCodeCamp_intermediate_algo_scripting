// Sum All Odd Fibonacci Numbers
// Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.
//
//     The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum
// of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.
//
// For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3,
//     and 5.

function sumFibs(num) {
   let arr = [1, 1, 2];
   let sum = 0;
   let curr_num = 2;
   for (let i = 2; arr[i] <= num; i++) {
       sum = arr[i] + arr[i - 1];
       arr.push(sum);

       if (arr[i] % 2 !== 0) {
           curr_num += arr[i];
       }
   }
   return curr_num;

}


console.log(sumFibs(4)); //1 + 1 + 3 = 5
console.log(sumFibs(10)); // 1, 1, 3, and 5.