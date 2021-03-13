// Substrings with K distinct letters
// Description

// Given string str of lowercase alphabets of length n and an integer K, the task is 
// to count all substrings of length K which have exactly K distinct characters.

// Input
// Input Format

// First line contains n and k separated by space

// Second line contains strings of length n.

// Constraints

// 1<=n<=10^6

// 1<=k<=10^6

// Output
// Print count of substrings of length k with k distinct letters

// Sample Input 1 

// 4 2
// abcc
// Sample Output 1

// 2
// Hint

// Sample 1 Explanation

// Possible substrings of length K = 2 are

// ab : 2 distinct characters

// bc : 2 distinct characters

// cc : 1 distinct character


// TC - O(N) SC - O(N)
function runProgram(input) {
  input = input.trim().split("\n");
  let [n, k] = input[0].trim().split(" ").map(Number);
  //   console.log("n, k", n, k);

  let a = input[1].trim().split(""),
    answer = 0,
    j = 0,
    obj = {};
  //   console.log("s", s);

  for (let i = 0; i < n; i++) {
    if (obj[a[i]]) {
      obj[a[i]]++;
    } else {
      obj[a[i]] = 1;
    }

    while (i - j + 1 > k) {
      obj[a[j]]--;
      j++;
    }

    if (i - j + 1 === k) {
      let c = 0;
      for (let key in obj) {
        if (obj[key]) {
          c++;
        }
      }
      if (c === k) {
        answer++;
      }
    }
  }
  console.log(answer);
}

runProgram("7 2\naaadefg");
