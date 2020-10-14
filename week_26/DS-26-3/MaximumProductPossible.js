// Maximum Product Possible
// Description

// Given an array A with n integers, find the maximum product possible with two array 
// elements having distinct indexes.

// Mathematically, find the max (Ai*Aj) where i not equal to j.

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 100) — the number of test
//  cases. Then t test cases follow.

// The first line of each test case contains a single integer n (2 ≤ n ≤ 10000) — the 
// number of elements in the array A.

// The second line of each test case contains n integers (1 ≤ Ai ≤ 10000).

// Output
// For each test case, print the answer: The maximum product possible.

// Sample Input 1 

// 3
// 6 
// 1 0 7 2 4 0
// 5
// 1 2 3 4 5
// 2
// 0 0
// Sample Output 1

// 28
// 20
// 0

// TC_O(N + NLogN) SC_O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  let tcs = Number(input[0]);
  // console.log("tcs", tcs);

  for (let i = 1; i < input.length; i++) {
    i++;
    let a = input[i]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => b - a);
    console.log(a[0] * a[1]);
  }
}

runProgram("3\n6 \n1 0 7 2 4 0\n5\n1 2 3 4 5\n2\n0 0");
