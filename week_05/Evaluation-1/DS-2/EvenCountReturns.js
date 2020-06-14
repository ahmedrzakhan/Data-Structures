// You have a string S and its starting index is 1. The string S consists of
// characters from 1-9. You are asked to count the number of even numbered
// characters ( i.e 2,4,6,8) for every index i .

// For an index i, the result should be calculated from i to the end of the string.
// Input Format

// First line contains a string S.

// Constraints

// Length of string S <= 10000

// Output Format

// Print space-separated integers,the result of every index.

// Sample Input 0

// 574674546476
// Sample Output 0

// 7 7 7 6 5 5 4 4 3 2 1 1

function processData(input) {
  //Enter your code here

  var countArray = [];

  input = input.split("").map(Number);
  // console.log("input", input);

  for (var i = 0; i < input.length; i++) {
    var count = 0;

    for (var j = i; j < input.length; j++) {
      if (input[j] % 2 === 0) {
        count = count + 1;
      }
    }

    // console.log("count", count );
    countArray.push(count);
  }

  console.log(countArray.join(" "));
}
