// Longest Consecutive Sequence
// Description

// Given an array A with n integers, find the length of the longest consecutive sequence
//  possible.

// More formally, select a subset from the given array which have consecutive elements 
// and is the longest possible consecutive sequence after arranging them in order.

// For example - [1,6,4,5,2]

// Two possible consecutive sequence are -> 1,2 and -> 4,5,6.

// So here the answer is 3.

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test 
// cases. Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 10000) — The
//  size of the array.

// The second line of each test case contains n integers (1 ≤ Ai ≤ 10000). The 
// elements of the array.

// Output
// For each test case, print the answer: The longest length of the consecutive sequence.

// Sample Input 1 

// 2
// 5
// 1 1 2 4 5
// 6
// 14 13 11 6 12 5
// Sample Output 1

// 2

// TC_O(N + NLogN) SC_O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i++]);
    // console.log("n", n);

    let arr = input[i]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    // console.log("arr", arr);

    const result = getCount(arr, n);
    console.log(result);
  }
}

const getCount = (a, n) => {
  let count = 1,
    maxCount = 1,
    prev = a[0];

  for (let i = 1; i < n; i++) {
    while (i < n && a[i] === a[i + 1]) {
      i++;
    }

    if (prev + 1 === a[i]) {
      count++;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 1;
    }
    maxCount = Math.max(maxCount, count);

    prev = a[i];
  }
  return maxCount;
};

runProgram("2\n5\n1 1 8 10 89\n6\n14 13 11 6 12 5");
