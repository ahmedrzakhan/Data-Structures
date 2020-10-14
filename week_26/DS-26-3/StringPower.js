// String Power
// Description

// Given a string s, find the power of the string.

// The power of the string is defined as the longest length of the substring possible 
// having only the same single character.

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 1000) — the number of test
//  cases. Then t test cases follow.

// The first line of each test case contains the string s (1 ≤ |s| ≤ 10000) — the length 
// of the string.

// Output
// For each test case, print the answer: The power of the string.

// Sample Input 1 

// 4
// aaaaaa
// aaabbb
// asd
// aabbcc
// Sample Output 1

// 6
// 3
// 1
// 2

// TC_O(N) SC_O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    let s = input[i];
    // console.log(s);
    const result = getPower(s);
    console.log(result);
  }
}

const getPower = (s) => {
  let n = s.length;
  let count = 1,
    maxCount = 1;
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      maxCount = Math.max(maxCount, count);
      count = 1;
    }
    maxCount = Math.max(maxCount, count);
  }

  return maxCount;
};

runProgram("4\naaaaaaaa\naaabbb\nasd\naabbcc");
