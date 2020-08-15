// Length & Recursion
// Description
// Given a string, S. Find the length of the string using recursion.
// Note: You are not allowed to use the length built-in property.
// Input
// Input Format
// The single line  consists of string S
// Constraints
// 1<= S length <= 200

// Output
// Print length of the given string S.

// Sample Input 1
// masaischool
// Sample Output 1
// 11

function runProgram(input) {
  let count = 0;

  let result = getLength(0, input.length, count);
  console.log(result);
}

const getLength = (i, n, c) => {
  if (i === n) {
    return c;
  } else {
    c++;
    return getLength(i + 1, n, c);
  }
};

runProgram("masaischool");
