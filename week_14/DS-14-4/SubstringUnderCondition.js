// Given a string S, you need to find count of all contiguous substrings starting
// and ending with same character.

// ** Try doing it recursively **

// Input Format

// First and the only line contains a string S

// Constraints

// Length of S <= 1000

// Output Format

// Output the count

// Sample Input 0

// abcab
// Sample Output 0

// 7
// Explanation 0

// There are 15 substrings of "abcab"
// a, ab, abc, abca, abcab, b, bc, bca
// bcab, c, ca, cab, a, ab, b
// Out of the above substrings, there
// are 7 substrings : a, abca, b, bcab,
// c, a and b.

function processData(input) {
  //Enter your code here
  // console.log("input", input);

  let count = 0,
    arr = [];

  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j <= input.length; j++) {
      let subStr = input.substring(i, j);
      //  console.log("subStr", subStr);
      arr.push(subStr);
    }
  }

  // console.log("arr", arr);

  let result = checkCondition(arr, 0, count);
  console.log(result);
}

const checkCondition = (arr, i, c) => {
  if (i === arr.length) {
    return c;
  } else {
    if (arr[i][0] === arr[i][arr[i].length - 1]) {
      c++;
    }

    return checkCondition(arr, i + 1, c);
  }
};
