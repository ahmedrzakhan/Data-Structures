// Subarray under condition
// Description

// Given an array A, print starting and ending index of all subarrays in the
//  array which has sum 0. (0-indexing)

// Input
// Input Format

// The single line contains an array of integers.

// Constraints

// 1 <= N <= 100

// Output
// Print starting and ending index of all subarrays in the array which has sum 0

// Sample Input 1 

// 6 3 -1 -3 4 -2 2 4 6
// Sample Output 1

// 2 4
// 2 6
// 5 6
// Hint

// Sample 1 Explanation

// 6 3 -1 -3 4 -2 2 4 6

// Subarray from Index 2 to 4 = -1+-3+4 =0

// Subarray from Index 2 to 6 = -1+3+4+-2+2 = 0

// Subarray from Index 5 to 6 = -2+2 = 0

// so, subarrays will be

// 2 4 2 6 5 6 and the list should be in a sorted manner. i.e subarray 2 6 should be printed 
// before 5 6 .


// TC - O(N2)
function runProgram(input) {
  let arr = input.split(" ").map(Number);
  //   console.log("arr", arr);

  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let sum = arr[i];

    for (let j = i + 1; j < n; j++) {
      if (arr[i] === 0) {
        console.log(i, i);
        break;
      }

      sum = sum + arr[j];
      if (sum === 0) {
        console.log(i, j);
      }
    }
  }
}

// runProgram("6 3 -1 -3 4 -2 2 4 6");
runProgram("0 3 -1 -3 4 -2 2 0 6");
