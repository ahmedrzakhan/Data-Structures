// You are given an integer N. Your task is to find if the string 420 is present in it or not.

// Print "Caught" (without quotes) if 420 is present in it. Otherwise "Escaped" (without quotes)
// if 420 is not present in it.

// Input Format

// You are provided an integer N.

// Constraints

// N<1000000

// Output Format

// Output an string based on the conditions mentioned above.

// Sample Input 0

// 97420
// Sample Output 0

// Caught
// Explanation 0

// 97420 contains 420.

// Hence output is "Caught"

function processData(input) {
  var found = false;
  //Enter your code here
  // // console.log('input', input);
  // console.log('typeof input', typeof input);
  // console.log('input[0]', input[0]);

  lengthOfString = input.length;
  // console.log('lengthOfString', lengthOfString);

  for (var i = 0; i < lengthOfString - 2; i++) {
    // console.log('i', i);

    if (input[i] === "4") {
      if (input[i + 1] === "2") {
        if (input[i + 2] === "0") {
          found = true;
        }
      }
    }
  }

  // console.log(found);

  if (found) {
    console.log("Caught");
  } else {
    console.log("Escaped");
  }
}
