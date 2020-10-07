// Make it Unique
// Description

// You are given a string, remove all the duplicates and print the unique string.

// Input
// Input Format

// The single line consists of string S.

// Constraints

// 1<=Length of S <= 50

// Output
// Print string with no duplicate characters.

// Sample Input 1 

// aaaabbbbbcccccdddd
// Sample Output 1

// abcd
// Hint

// Sample 1 Explanation

// S ="aaaabbbbbcccccdddd"

// here a, b, c and d present multiple times if more than one such occurrence 
// is removed we will get a string with unique characters as "abcd"

// TC - O(N)
function runProgram(input) {
  let arr = input.trim().split("");
  // console.log(arr)
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    obj[arr[i].trim()] = arr[i];
  }

  // console.log("obj", obj);

  let keys = Object.keys(obj);
  console.log(keys.join(""));
}


runProgram("aaaabbbbbacccccdddd");
