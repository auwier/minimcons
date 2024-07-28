// JavaScript example
let sum_even = 0;
for (let num = 1; num <= 10; num++) {
    if (num % 2 === 0) {
        sum_even += num; // Accumulate even numbers
    }
}
console.log(sum_even); // Output will be 30 (sum of even numbers from 1 to 10)
