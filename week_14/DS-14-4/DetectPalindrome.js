// Given an integer, print "Yes" (without quotes) if that integer is a Palindrome,
// else print "No" (without quotes) ** You must write a recursive function to achieve
// this ** You must not use reverse() function. Using that would lead to disqualification

// Input Format

// You are provided with one integer.

// Constraints

// Provided integer is always lesser than 1000000

// Output Format

// Print Yes or No depending upon the integer.

// Sample Input 0

// 1221
// Sample Output 0

// Yes
// Explanation 0

// Reading 1221 from either side is same, so Yes, it is a palindrome.

function processData(input) {
  //Enter your code here
  input = input.split("");
  let n = input.length - 1;
  // console.log(n);

  let result = checkPalindrome(input, n);
  console.log("result", result);
  // console.log(typeof input);

  if (input.join("") === result) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

const checkPalindrome = (s, i) => {
  // console.log("i", i);
  if (i === 0) {
    console.log("if s[i]", s[i]);
    return s[i];
  } else {
    console.log("else s[i]", s[i]);
    return s[i] + checkPalindrome(s, i - 1);
  }
};

processData("1221");
