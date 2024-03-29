// In this challenge, you will determine whether a string is funny or not. 
// To determine whether a string is funny, create a copy of the string in 
// reverse e.g. . Iterating through each string, compare the absolute difference 
// in the ascii values of the characters at positions 0 and 1, 1 and 2 and so on 
// to the end. If the list of absolute differences is the same for both strings, 
// they are funny.

// Determine whether a give string is funny. If it is, return Funny, otherwise 
// return Not Funny.

// For example, given the string , the ordinal values of the charcters are .  
// and the ordinals are . The absolute differences of the adjacent elements for
//  both strings are , so the answer is Funny.

// Function Description

// Complete the funnyString function in the editor below. For each test case, it 
// should return a string, either Funny or Not Funny.

// funnyString has the following parameter(s):

// s: a string to test
// Input Format

// The first line contains an integer , the number of queries.
// The next  lines each contain a string, .

// Constraints

// Output Format

// For each string  print whether it is Funny or Not Funny on a new line.

// Sample Input

// 2
// acxz
// bcxz
// Sample Output

// Funny
// Not Funny
// Explanation

// You can use  to store the reverse of .

// Test Case 0:

// , 
// Corresponding ASCII values of characters of the strings:
//  and 
// For both the strings the adjacent difference list is [2, 21, 2] so we print Funny.

// Test Case 1:

// , 
// Corresponding ASCII values of characters of the strings:
//  and 
// The adjacent difference list for string  is [1, 21, 2] and for string  it is [2, 21, 1]. Since they are not the same we print Not Funny.


// O(N)
function runProgram(s) {
  console.log(s);

  let arr = [];
  for (let i = 0; i < s.length; i++) {
    arr.push(s.charCodeAt(i));
  }

  console.log("arr", arr);

  let diff = [],
    reversedDiff = [];

  for (let i = 1; i < arr.length; i++) {
    diff.push(Math.abs(arr[i] - arr[i - 1]));
  }

  for (let i = arr.length - 1; i > 0; i--) {
    reversedDiff.push(Math.abs(arr[i - 1] - arr[i]));
  }

  console.log(diff);
  console.log(reversedDiff);

  const result = check(diff, reversedDiff);

  if (result) {
    console.log("Funny");
    return "Funny";
  } else {
    console.log("Not Funny");
    return "Not Funny";
  }
}

const check = (a, b) => {
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) {
      return false;
    }
  }

  return true;
};

runProgram("acxz");
runProgram("bcxz");
