// You are given a number n. A number is said to be magical if it contains magic digits
//  4 and 7.For example 77,47,74,474 are magical and 20,467,17 are not.

// The number is almost magical if it is evenly divisible by one of the magic numbers.

// print "YES" (without the quotes), if number n is almost lucky. Otherwise, print "NO"
// (without the quotes).

// Input Format

// The single line contains an integer n .

// Constraints

// 1 ≤ n ≤ 1000

// Output Format

// In the only line print "YES" (without the quotes), if number n is almost
//  Magical. Otherwise, print "NO" (without the quotes).

// Sample Input 0

// 47
// Sample Output 0

// YES
// Explanation 0

// In the first sample 47 is a Magic number.

// Sample Input 1

// 16
// Sample Output 1

// YES
// Explanation 1

// In the second sample 16 is divisible by 4.

function processData(input) {
  //Enter your code here
  // console.log( input[0]);

  var magic = true;

  if (input % 4 == 0 || input % 7 == 0) {
    magic = true;
  } else if (true) {
    for (var i = 0; i < input.length; i++) {
      if (input[i] != 4 && input[i] != 7) {
        magic = false;
        break;
      }
    }
  } else {
    magic = false;
  }

  if (magic) {
    console.log("YES");
  } else {
    console.log("NO");
  }
}
