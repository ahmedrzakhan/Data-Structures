// You are provided an integer N. Depending upon the value, you have to print a
// string as per the following rules:

// Print "Masai" (without quotes) if the integer is a multiple of 7
// Print "School" (without quotes) if the integer is a multiple of 5
// Print "Masai School" (without quotes) if the integer is a multilpe of 35
// Else in all other cases print "Hurray!" (without quotes)
// Input Format

// First line contains N

// Constraints

// N<100

// Output Format

// Output one of the 4 possible strings

// Sample Input 0

// 7
// Sample Output 0

// Masai

function processData(input) {
  //Enter your code here
  // console.log('input', input);
  // console.log('typeof input', typeof input)

  givenNumber = Number(input);
  // console.log('givenNumber', givenNumber);
  // console.log('typeof givenNumber', typeof givenNumber);

  if (givenNumber % 7 === 0 && givenNumber % 5 === 0) {
    console.log("Masai School");
  } else if (givenNumber % 7 === 0) {
    console.log("Masai");
  } else if (givenNumber % 5 === 0) {
    console.log("School");
  } else {
    console.log("Hurray!");
  }
}
