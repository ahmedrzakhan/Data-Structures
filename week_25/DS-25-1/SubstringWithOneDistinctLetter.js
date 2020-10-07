// Substring with one distinct letter
// Description

// Given a string S, return the number of substrings that have only one distinct letter.

// Input
// Input Format

// A  single line contains string S

// Constraints

// 1 <= S.length <=100

// Output
// Print the count of substrings  with only one distinct letter

// Sample Input 1 

// aaaba
// Sample Output 1

// 8
// Hint

// Sample 1 Explanation :

// The substrings with one distinct letter are "aaa", "aa", "a", "b".

// "aaa" occurs 1 time.

// "aa" occurs 2 times.

// "a" occurs 4 times.

// "b" occurs 1 time.


// TC - O(N2 + N)

function runProgram(input) {
  let s = input.trim();

  let count = 0;

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      let subString = input.substring(i, j);
      //   console.log("subString", subString);

      let response = check(subString);
      if (response) {
        count++;
      }
    }
  }
  console.log(count);
}

const check = (s) => {
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }

  if (Object.keys(obj).length === 1) {
    // console.log("obj", obj);
    return true;
  }
  return false;
};

runProgram("aaaba");
