// Find Sum of Multiples
// Description

// You are given three integers: n, k , y

// You have to print sum of first k multiples of n which are multiple of y as well.

// Input
// Input Format :

// The input line contains 3 spaced integers which are n, k and y.

// Constraints :

// 1 <= n <= 1000

// 1 <= y <= 1000

// 1<= k <= 10^4

// Output
// Output the number which is sum of multiples of given integers.

// Sample Input 1

// 3 10 5
// Sample Output 1

// 45
// Hint

// Output Explanation :
// For the sample input first k(10) multiples of n(3) are
// 3
// 6
// 9
// 12
// 15
// 18
// 21
// 24
// 27
// 30
// Sum of those which are multiple of y (5) is = 15 +30 = 45

function runProgram(input) {
  //   console.log("input", input);

  let [n, k, y] = input.split(" ").map(Number);
  //   console.log("n, k, y", n, k, y);

  let arrOfN = [];
  for (let i = 1; i <= k; i++) {
    arrOfN.push(n * i);
  }

  //   console.log("arrOfN", arrOfN);

  let sum = 0;
  for (let i = 0; i < k; i++) {
    if (arrOfN[i] % y === 0) {
      sum = sum + arrOfN[i];
    }
  }
  console.log(sum);
}

runProgram("3 10 5");
