// Substrings with K distinct letters
// Description

// Given string str of lowercase alphabets of length n and an integer K, the task
//  is to count all substrings of length K which have exactly K distinct characters.

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


// O(N)
function runProgram(input) {
  input = input.trim().split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
  // console.log("n, k ", n, k);

  let arr = input[1].trim();
  // console.log("arr", arr);

  let obj = {},
    j = 0,
    ans = 0;

  for (let i = 0; i < n; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]]++;
    } else {
      obj[arr[i]] = 1;
    }

    while (i - j + 1 > k) {
      obj[arr[j]]--;
      j++;
    }

    if (i - j + 1 === k) {
      let count = 0;

      for (let key in obj) {
        if (obj[key]) {
          count++;
        }
      }
      if (count === k) {
        ans++;
      }
    }
  }
  console.log(ans);
}

runProgram("4 2\nabcc");
