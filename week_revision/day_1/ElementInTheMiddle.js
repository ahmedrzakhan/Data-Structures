// Element in the middle
// Description

// Given an unsorted array of size, N. Find the first element in the array such that all
//  of its left elements are smaller and all right elements to it are greater than it.

// Note: Left and right side elements can be equal to the required element. And extreme
// elements cannot be required element.

// Input
// Input Format

// The first line contains an integer n denoting the size of the array and the second line
// contains n space separated array elements.

// Constraints

// n <= 1000

// Ai <= 10000

// Output
// For each test case, in a new line print the required element. If no such element
// present in the array then print -1.

// Sample Input 1

// 5
// 4 3 6 7 8
// Sample Output 1

// 6

// TC - O(N) SC - O(N)
function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log("input", input);

  let n = Number(input[0]);
  //   console.log("n", n);

  let arr = input[1].trim().split(" ").map(Number);
  //   console.log("arr", arr);

  let max = Number.MIN_SAFE_INTEGER,
    min = Number.MAX_SAFE_INTEGER;

  let left = [],
    right = [];

  //   (left[0] = Number.MAX_SAFE_INTEGER), (right[n - 1] = Number.MIN_SAFE_INTEGER);

  for (let i = 1; i < n; i++) {
    max = Math.max(arr[i - 1], max);
    left[i] = max;
  }
  console.log("left", left);

  for (let i = n - 2; i >= 0; i--) {
    min = Math.min(arr[i], min);
    right[i] = min;
  }
  console.log("right", right);

  for (let i = 1; i < n - 1; i++) {
    //   console.log("arr[i]", arr[i], "left[i]", left[i], "right[i]", right[i]);
    if (arr[i] >= left[i] && arr[i] <= right[i]) {
      console.log(arr[i]);
      return;
    }
  }
  console.log(-1);
}

runProgram("5\n4 3 6 7 8");
