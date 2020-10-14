// Longest Increasing Subarray
// Description

// Given an array A with n integers, find out the length of the longest subarray 
// which is strictly increasing i.e, every element is greater than it's the previous 
// element in that subarray.

// Expected Time Complexity O(n^2) for each array.

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test 
// cases. Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 100) — the number
//  of elements in the array A.

// The second line of each test case contains n integers (1 ≤ Ai ≤ 100).

// Output
// For each test case, print the answer: The length of the longest subarray.

// Sample Input 1 

// 2
// 2
// 1 1
// 6
// 1 2 1 2 3 1
// Sample Output 1

// 1
// 3

// TC_O(N) SC_O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i++]);
    // console.log("n", n);

    let arr = input[i].trim().split(" ").map(Number);
    // console.log("arr", arr);

    const result = getCount(arr, n);
    console.log(result);
  }
}

const getCount = (a, n) => {
  let count = 1,
    maxCount = 1;

  for (let i = 0; i < n - 1; i++) {
    if (a[i] < a[i + 1]) {
      count++;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 1;
    }
    maxCount = Math.max(maxCount, count);
  }
  return maxCount;
};

runProgram("2\n2\n1 1\n6\n1 2 1 2 3 1");
