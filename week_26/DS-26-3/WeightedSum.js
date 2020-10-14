// Weighted Sum
// Description

// Given an array A with n integers, find out the weighted sum of the array.

// The weight here refers to the index of the element (in 1-based indexing of the array).

// Formula for Weighted Sum = (Summation for all 0 <= i < n) {Wi * Ai}.

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases.
//  Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 1000) — the number of 
// elements in the array A.

// The second line of each test case contains n integers (1 ≤ Ai ≤ 100).

// Output
// For each test case, print the answer: The weighted sum.

// Sample Input 1 

// 2
// 5
// 1 2 3 4 5
// 2
// 100 1
// Sample Output 1

// 55
// 102

// TC_O(N) SC_O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    i++;
    let sum = input[i]
      .trim()
      .split(" ")
      .map(Number)
      .map((ele, i) => (i + 1) * ele)
      .reduce((acc, ele) => acc + ele, 0);
    console.log(sum);
  }
}

runProgram("2\n5\n1 2 3 4 5\n2\n100 1");
