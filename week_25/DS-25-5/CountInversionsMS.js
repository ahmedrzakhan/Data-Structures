// Count inversions!(Using Merge Sort)
// Description

// Given an array of n integers. Find its inversion count.

// Inversion Count for an array indicates – how far (or close) the array is from 
// being sorted.

// If the array is already sorted then inversion count is 0. If the array is sorted 
// in the reverse order that inversion count is the maximum.

// Formally speaking, two elements a[i] and a[j] form an inversion if a[i] > a[j] and i < j

// Input
// Input Format

// First line consists of integer n.

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 100000

// Output
// Print count in a single line

// Sample Input 1 

// 4
// 8 4 2 1
// Sample Output 1

// 6
// Hint

// Sample 1 Explanation

// Given array has six inversions


// TC_O(N2) SC_O(1)
function runProgram(input) {
  input = input.trim().split("\n");
  let n = Number(input[0]);
  // console.log("n", n);

  let arr = input[1].trim().split(" ").map(Number);
  // console.log("arr", arr);

  let count = 0;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        count++;
      }
    }
  }
  console.log(count);
}

runProgram("4\n8 4 2 1");
