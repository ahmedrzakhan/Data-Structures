// Take out maximum
// Description

// Given an array of integers and a number k, find the maximum sum of a subarray of size k.

// Input
// Input Format

// First line consists of two integers n and k separated by space

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^7

// 1 <= k <= 10^6

// Output
// Print the maximum sum of a subarray of size k.

// Sample Input 1 

// 10 3
// -1 -1 -2 1 -2 4 1 9 3 9
// Sample Output 1

// 21

// TC - O(N)
function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  let arr = input[1].trim().split(" ").map(Number);
  let maxSum = 0,
    sum = 0,
    j = 0;

  for (let i = 0; i < n; i++) {
    sum += arr[i];

    while (i - j + 1 > k) {
      sum -= arr[j];
      j++;
    }
    if (i - j + 1 === k) {
      maxSum = Math.max(sum, maxSum);
    }
  }

  console.log(maxSum);
}

runProgram("10 3\n-1 -1 -2 1 -2 9 3 9 4 1");
