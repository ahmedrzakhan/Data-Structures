// Roy wanted to increase his typing speed for programming contests. His friend
// suggested that he type the sentence "The quick brown fox jumps over the lazy dog"
// repeatedly. This sentence is known as a pangram because it contains every letter of
// the alphabet.

// After typing the sentence several times, Roy became bored with it so he started to
//  look for other pangrams.

// Given a sentence, determine whether it is a pangram. Ignore case.

// Function Description

// Complete the function pangrams in the editor below. It should return the string
//  pangram if the input string is a pangram. Otherwise, it should return not pangram.

// pangrams has the following parameter(s):

// s: a string to test
// Input Format

// Input consists of a string .

// Constraints

// Each character of ,

// Output Format

// Output a line containing pangram if  is a pangram, otherwise output not pangram.

// Sample Input 0

// We promptly judged antique ivory buckles for the next prizeSample Output 0
// pangram
// Sample Explanation 0
// All of the letters of the alphabet are present in the string.
// Sample Input 1
// We promptly judged antique ivory buckles for the prize
// Sample Output 1
// not pangram
// Sample Explanation 0
// The string lacks an x.

function runProgram(input) {
  let obj = {};

  for (let i = 0; i < input.length; i++) {
    if (obj[input[i].toLowerCase()]) {
      obj[input[i].toLowerCase()]++;
    } else {
      obj[input[i].toLowerCase()] = 1;
    }
  }

  let keys = Object.keys(obj).sort();
  console.log(keys);

  console.log(keys.length);

  if (keys[0] === " " && keys.length === 27) {
    console.log("pangram");
  } else if (keys[0] !== " " && keys.length === 26) {
    console.log("pangram");
  } else {
    console.log("not pangram");
  }
}

runProgram("Wepromptlyjudgedantiqueivorybucklesforthenextprize");

// Another Approach

function runProgram(s) {
  s = s
    .trim()
    .split("")
    .map((item) => item.toLowerCase());
  let alpha = "abcdefghijklmnopqrstuvwxyz".split("");

  for (let i = 0; i < 26; i++) {
    if (!s.includes(alpha[i])) {
      console.log("not pangram");
      return "not pangram";
    }
  }

  console.log("pangram");
  return "pangram";
}
