// Beyond Factorial!
// Description

// Given an integer N , you have to find the natural logarithmic value of given
// integer's factorial i.e., ln(n!).

// You have to print the result up to 4 digits after the decimal point.

// Note: You are not allowed to use log built-in function to calculate directly ln(n!)
//  but you can use it anywhere else to know the logarithmic value of a particular integer.
//   Also, you can't use any direct formula or perform the task iteratively - Try achieving
//   the output recursively

// Input
// Input format

// Single line consists an integer N

// Constraints

// 1 <= N <= 50

// Output
// Print the result in a single line.

// Sample Input 1

// 3
// Sample Output 1

// 1.7918`
// Hint

// ln(x ∙ y) = ln(x) + ln(y)

function runProgram(input) {
  let n = Number(input);

  const result = fact(n);
  console.log(result.toFixed(4));
}

const fact = (n) => {
  if (n === 1) {
    return 0;
  } else {
    return Math.log(n) + fact(n - 1);
  }
};

runProgram("3");
