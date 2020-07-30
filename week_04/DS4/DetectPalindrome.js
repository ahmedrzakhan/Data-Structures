// Given an integer, print "Yes" (without quotes) if that integer is a Palindrome,
//  else print "No" (without quotes)

// You must not use reverse() function. Using that would lead to disqualification

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

// Usng String Method

function processData(input) {
  //Enter your code here
  var isPalindrome;
  // console.log('input', input);
  // console.log('typeof input', typeof input);

  for (var i = 0; i < input.length / 2; i++) {
    if (input[i] === input[input.length - i - 1]) {
      isPalindrome = true;
    } else {
      isPalindrome = false;
      break;
    }
  }

  if (isPalindrome) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}

// Usng Number Method

function processData(input) {
  //Enter your code here
  input = Number(input);

  n = input;
  reverse = 0;

  while (n > 0) {
    remainder = n % 10;
    reverse = reverse * 10 + remainder;
    n = Math.floor(n / 10);
  }

  // console.log('reverse', reverse);

  if (reverse === input) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
