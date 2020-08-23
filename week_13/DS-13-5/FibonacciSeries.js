// In mathematics, the Fibonacci numbers, commonly denoted F(n) form a sequence,
//  called the Fibonacci sequence, such that each number is the sum of the two
//  preceding ones, starting from 0 and 1. That is

// F (0) = 0 , F (1) = 1
// and

// F (n) = F (n − 1) + F (n − 2) ,
// for n > 1.

// Your task is to write a program that calculates n-th fibonacci numbers when you are
// provided with n

// Input Format

// First line of input contains n

// Constraints

// n<35

// Output Format

// Output the n-th fibonacci number

// Sample Input 0

// 4
// Sample Output 0

// 3

function processData(input) {
  let n = Number(input);

  const result = fib(n);
  console.log(result);
}

const fib = (n) => {
  if (n < 2) {
    return n;
  } else {
    return fib(n - 1) + fib(n - 2);
  }
};

processData("4");
