// You are provided a string S. Write a programme that returns length of the longest
// palindromic substring of that string.

// Input Format

// You are provided with a string

// Constraints

// Length of string < 100

// Output Format

// Output one number which is length of the longest substring which is a palindrome

// Sample Input 0

// thisracecarisgood
// Sample Output 0

// 7
// Explanation 0

// The given string contains a palindromic substring which is, "racecar" and it is of
//  largest length(7) among all other palindromic substrings. Hence the output is 7

function processData(input) {
  //Enter your code here
  var maxLength = 0;
  // console.log('input', input);
  // console.log('typeof input', typeof input);

  for (i = 0; i < input.length; i++) {
    for (j = i; j <= input.length; j++) {
      subString = input.substring(i, j);
      // console.log('subString', subString);

      isPalindrome = checkIfPalindrome(subString);
      // console.log(isPalindrome);

      if (isPalindrome) {
        lengthOfPalindrome = subString.length;
        // console.log('lengthOfPalindrome', lengthOfPalindrome);
        maxLength = Math.max(maxLength, lengthOfPalindrome);
      }
    }
  }
  console.log(maxLength);
}

checkIfPalindrome = function (subString) {
  if (subString.split("").reverse().join("") === subString) {
    isPalindrome = true;
  } else {
    isPalindrome = false;
  }
  return isPalindrome;
};
