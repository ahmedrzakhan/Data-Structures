// You are given a wooden stick N meters long. Can the stick be cut into
// 3 pieces such that it forms sides of equilateral triangle.

// If its possible, print "Yes"

// Else print "No"

// Input Format

// First line contains length of wood : N

// Constraints

// N < 1000

// Output Format

// Print Yes/No based on the length

// Sample Input 0

// 6
// Sample Output 0

// Yes

function processData(input) {
  //Enter your code here

  input = Number(input);

  if (input % 3 === 0) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
