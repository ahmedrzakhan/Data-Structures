// Given a string of lowercase characters and integers, decompress the string under
// following rules:

// If an integer is encounterd, the character just before it gets added to a final
// string as many times as the number
// For instance, if the string is "a3b2" => the output should be "aaabb" because a
//  is followed by 3, and b is followed by 2

// Write a program that decompresses the string based on rules above

// Input Format

// Input contains one string

// Constraints

// Length of string <= 100

// Output Format

// Output the decompressed string

// Sample Input 0

// a3b2
// Sample Output 0

// aaabb

function processData(input) {
  //Enter your code here

  input = input.split("");
  // console.log("input", input);

  var result = "";

  for (var i = 0; i < input.length; i++) {
    // var result = "";

    if (input[i] >= "A") {
      // console.log( "Char", input[i] );
      if (Number(input[i + 1] > 0)) {
        // console.log( "Number", input[i + 1] );

        for (var j = 0; j < Number(input[i + 1]); j++) {
          result = result + input[i];
        }
      }
    }
  }

  console.log(result);
}

// processData("a3b2");



function processData(input) {
  let str = "";

  for (let i = 0; i < input.length; i++) {
    if (typeof input[i] === "string") {
      i = i + 1;
      if (typeof Number(input[i]) === "number") {
        i = i - 1;
      }
      for (let j = 0; j < Number(input[i + 1]); j++) {
        str = str + input[i];
      }
    }
  }

  console.log(str);
}
processData("a3b2");
