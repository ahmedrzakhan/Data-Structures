// You are given a string S. Your task is to write a program that comments if
// it has all unique character or not (no repeated character).

// If it has just unique character, output "Unique"

// Else in all other cases, output "No"

// Input Format

// First and the only line contains string S

// Constraints

// Length of S < 1000

// Output Format

// Output one string based on string

// Sample Input 0

// masai
// Sample Output 0

// No

function processData(input) {
  //Enter your code here
  var uniqueObject = {},
    uniqueness;

  for (var i = 0; i < input.length; i++) {
    if (uniqueObject[input[i]]) {
      uniqueObject[input[i]]++;
    } else {
      uniqueObject[input[i]] = 1;
    }
  }

  // console.log( 'uniqueObject', uniqueObject );
  // console.log( 'uniqueObject', Object.values(uniqueObject) );

  for (var j = 0; j < Object.values(uniqueObject).length; j++) {
    // console.log(j)
    if (Object.values(uniqueObject)[j] > 1) {
      uniqueness = false;
      break;
    } else {
      uniqueness = true;
    }
  }

  if (uniqueness) {
    console.log("Unique");
  } else {
    console.log("No");
  }
}
