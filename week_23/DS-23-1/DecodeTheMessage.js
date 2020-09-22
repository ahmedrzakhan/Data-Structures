// Decode the message
// Description

// Your friend sent you an encrypted message consisting of characters A, C,
//  G and T only .You know the decoded message is the longest repetition in the
//  sequence. That is a maximum-length substring containing only one kind of
//  character. Can you decode it?

// Input
// Input Format

// The only input line contains a string of n characters.

// Constraints

// 1 <= n <= 10^6

// Output
// Print one integer: the length of the longest repetition.

// Sample Input 1

// ATTCGGGA
// Sample Output 1

// 3
// Hint

// Sample Input 1 Explanation

function runProgram(input) {
  (s = input.trim()), (n = s.length);

  // console.log("s", s);

  let count = 1,
    result = [];
  for (let i = 0; i < n - 1; i++) {
    if (s[i] === s[i + 1]) {
      count++;
    } else {
      result.push(count);
      count = 1;
    }
  }
  result.push(count);

  // console.log(result);
  console.log(Math.max(...result));
}

runProgram("ATTCGGGAGGGGG");
