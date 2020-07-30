// Min Length, Substring, Distinct
// Description

// Given a string, find the length of the smallest sub-string consisting of maximum
// distinct characters.

// Also note that the output can have reprating characters.

// Suppose string is aaabbbcdcd, but the substring "abbbcd" contains all the distinct
// characters present in the string (i.e. "a", "b", "c", "d")

// Input
// Input Format :

// First line of input contains the string

// Constraints :

// Length of string < 500

// Output
// Print the number which is the length of the smallest sub-string consisting of maximum
// distinct characters

// Sample Input 1

// zoomsessionmooz
// Sample Output 1

// 10

function runProgram(input) {
  //   console.log("input", input);

  let allChars = getDistinctChars(input);
  //   console.log("allChars", allChars);

  let minimum = Number.MAX_SAFE_INTEGER;

  for (let i = 0; i < input.length; i++) {
    for (let j = i; j <= input.length; j++) {
      let subString = input.substring(i, j);
      if (subString.length >= allChars.length) {
        // console.log("subString", subString);
        let equalOrLarger = getDistinctChars(subString);
        // console.log("equalOrLarger", equalOrLarger);
        // console.log("subString", subString);

        if (equalOrLarger.length === allChars.length) {
          if (subString.length < minimum) {
            minimum = subString.length;
          }
        }
      }
    }
  }
  console.log(minimum);
}

const getDistinctChars = (s) => {
  let obj = {};

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = s[i];
  }
  //   console.log("obj", obj);

  const distinctArr = Object.keys(obj);

  return distinctArr;
};

runProgram("zoomsessionmooz");
