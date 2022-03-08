// sum of all nums in the array and between these nums
function sumAll(arr) {
    let min = Math.min(...arr);
    let max = Math.max(...arr);
    let sum = 0;
    for (let i = min; i <= max; i++) {
        sum += i
    }
    return sum;
}

console.log(sumAll([1, 4])); // 1 + 2 + 3 + 4 = 10