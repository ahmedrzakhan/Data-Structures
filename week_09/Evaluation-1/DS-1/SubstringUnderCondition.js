// Given a string S, you need to find count of all contiguous substrings starting
// and ending with same character.

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

  var count = 0;

  for (var i = 0; i < input.length; i++) {
    for (var j = i + 1; j <= input.length; j++) {
      var SubString = input.substring(i, j);
      // console.log("SubString", SubString);

      if (SubString[0] === SubString[SubString.length - 1]) {
        // console.log("SubString", SubString);

        count = count + 1;
      }
    }
  }

  console.log(count);
}
