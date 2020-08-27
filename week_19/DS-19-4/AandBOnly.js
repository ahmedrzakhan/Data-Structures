// a and b only
// Description

// You are given a string S that contains 3 characters: 'a', 'b', and '?'. Your
// task is to convert it to a string which contains only 2 characters: 'a', 'b'.
//  The converted string must follow following conditions:

// 1. It should not contains two letters 'a' in a row.

// 2. if there are many strings possible, the answer should be one which is the first
// in alphabetical order

// (Read sample test case for better understanding)

// Input
// Input Format

// The first line contains non-empty string s consisting of 'a', 'b' and '?' characters.

// Constraints

// Length of s is at most 50.

// Output
// Output Format

// Output the first in alphabetical order word

// Sample Input 1

// ?ba??b
// Sample Output 1

// ababab
// Hint

// Sample 1 Explanation

function runProgram(input) {
  let arr = input.trim().split("");

  //   console.log("arr", arr);

  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[0] === "?" && arr[1] === "a") {
      arr[0] = "b";
    } else if (arr[0] === "?" && arr[1] !== "a") {
      arr[0] = "a";
    }

    if (arr[i] === "?") {
      if (arr[i - 1] === "a" || arr[i + 1] === "a") {
        arr[i] = "b";
      } else {
        arr[i] = "a";
      }
    }

    if (arr[arr.length - 1] === "?" && arr[arr.length - 2] === "a") {
      arr[arr.length - 1] = "b";
    } else if (arr[arr.length - 1] === "?" && arr[arr.length - 2] === "b") {
      arr[arr.length - 1] = "a";
    }
  }

  console.log(arr.join(''));
}

runProgram("?ba??b");

// Optimized Approach

function runProgram(input) {
  let arr = input.trim().split("");

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "?") {
      if (arr[i + 1] === "a" || arr[i - 1] === "a") {
        arr[i] = "b";
      } else {
        arr[i] = "a";
      }
    }
  }

  console.log(arr.join(""));
}

runProgram("?ba??b");
