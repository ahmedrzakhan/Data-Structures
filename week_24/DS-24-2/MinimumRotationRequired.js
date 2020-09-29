
// Minimum Rotations Required
// Description

// You are given a string S you have to find the minimum rotations required
//  to get the same string.

// For string "aaaa" the minimum rotations will be 1.

// Input
// Input Format

// Input consists of a string S

// Constraints

// 1<= Length of S <= 100


// Output
// Print minimum rotations in a single line.


// Sample Input 1 

// masai
// Sample Output 1

// 5
// Hint

// sample input 1 Explanation :

// s = "masai"


// TC (O(N))
function runProgram(input) {
  let arr = input.trim().split("");
//   console.log("arr", arr);

  let n = arr.length;

  let count = 1;
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] === arr[i + 1]) {
      count++;
    }
  }

//   console.log(count);

  if (count === n) {
    console.log(1);
  } else {
    console.log(n);
  }
}

runProgram("masai")
// runProgram("aaaa");
