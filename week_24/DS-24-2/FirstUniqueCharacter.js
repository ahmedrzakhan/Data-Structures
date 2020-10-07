// First unique character
// Description

// You are given a string, You have to print the first non-repeating character
//  of the string if exists, else print "Not Found".

// In the given sample input

// S = "racecars"

// r, a and c appear 2 times, e and s appear 1 time.

// and e is the first non-repeating character.

// Input
// Input Format

// The single line consists of string S.

// Constraints

// 1<=Length of S <= 50

// Output
// Print first non-repeating character of string S.

// Sample Input 1 

// racecars
// Sample Output 1

// e

// O(N);
function runProgram(input) {
  let s = input.trim();

  let obj = {};
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }

  // console.log(obj);

  let keys = Object.keys(obj);
  // console.log("keys", keys);

  let values = Object.values(obj);
//   console.log("values", values);

  let firstOne = values.indexOf(1);
  // console.log("firstOne", firstOne);

  // if

  if (keys[firstOne] === undefined) {
    console.log("Not Found");
  } else {
    console.log(keys[firstOne]);
  }
}

runProgram("raceecarss");
