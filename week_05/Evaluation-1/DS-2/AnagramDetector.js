// An anagram is a word or phrase formed by rearranging the letters of a different
// word or phrase, typically using all the original letters exactly once. For example,
// the word anagram can be rearranged into nag a ram.

// Given 2 phrases, write a program that detects if both are anagrams of each other.

// If both are anagrams, print "True"

// Else print "False"

// Input Format

// First line of input contains first phrase

// Second line of input contains second phrase

// Constraints

// Length of each phrase < 1000

// Output Format

// Output a string based on conditions mentioned above

// Sample Input 0

// anagram
// nag a ram
// Sample Output 0

// True

function processData(input) {
  //Enter your code here
  // console.log('input', input);
  // console.log('typeof input', typeof input);

  input = input.split("\n");
  // console.log('input',input);
  // console.log('typeof input', typeof input);

  firstWord = input[0];
  // console.log('firstWord',firstWord);

  splitFirstWord = firstWord.split(" ");
  // console.log('splitFirstWord',splitFirstWord);

  joinSplitFirstWord = splitFirstWord.join("");
  // console.log('joinSplitFirstWord',joinSplitFirstWord);

  splitjoinSplitFirstWord = joinSplitFirstWord.split("");
  // console.log('splitjoinSplitFirstWord',splitjoinSplitFirstWord);

  sortSplitjoinSplitFirstWord = splitjoinSplitFirstWord.sort();
  // console.log('sortSplitjoinSplitFirstWord',sortSplitjoinSplitFirstWord);

  secondWord = input[1].split(" ").join("").split("").sort();
  // console.log('secondWord',secondWord);

  var result = isAnagram(sortSplitjoinSplitFirstWord, secondWord);

  if (result) {
    console.log("True");
  } else {
    console.log("False");
  }
}

isAnagram = function (firstWord, secondWord) {
  if (firstWord.length !== secondWord.length) {
    return false;
  } else {
    for (var i = 0; i < firstWord.length; i++) {
      if (firstWord[i] !== secondWord[i]) {
        return false;
      }
    }
    return true;
  }
};
