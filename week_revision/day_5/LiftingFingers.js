// Lifting Fingers
// Description

// Given a string s, find the number of lifts performed by fingers while switching
//  keys.

// Here, we have a keyboard that has keys starting from 'a' to 'z' in a single row. 
// Now, we have to type the given string using the above keyboard.

// In our problem, we lift our fingers whenever there is a change of characters while
//  typing.

// Consider, while typing the same character, no fingers are lifted.


// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of 
// test cases. Then t test cases follow.

// The first line of each test case contains the string s (1 ≤ |s| ≤ 1000) — the 
// length of the string.


// Output
// For each test case, print the answer: The number of lifts.


// Sample Input 1 

// 2
// aaaaa
// abbbaaz
// Sample Output 1

// 1
// 4

// TC - O(N) SC - O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    let s = input[i].trim();
    const res = getCount(s);
    console.log(res);
  }
}

const getCount = (s) => {
  let c = 1,
    n = s.length - 1,
    i = 0;

  while (i < n) {
    if (s[i] !== s[i + 1]) {
      c++;
    }
    i++;
  }
  return c;
};

runProgram("2\naaaaa\nabbbaaz");
