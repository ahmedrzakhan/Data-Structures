// You will be given an n by n matrix. You will have to calculate the sum of the boundary
// and diagonal elements of the matrix. Avoid adding an element twice, if it is counted in
//  boundary elements then don't consider it twice in the diagonal element

// Input Format

// First line will contain the number of rows n (same as the number of columns) After that
//  next n lines will n rows of the matrix

// Constraints

// n<=1000 Elements Of the Matrix <= 10000

// Output Format

// You have to display a number which is the sum of boundary and diagonal elements of the matrix

// Sample Input 0

// 5
// 1 2 3 4 5
// 6 7 8 9 1
// 2 3 4 5 6
// 7 8 9 1 2
// 3 4 5 6 7
// Sample Output 0

// 93
// Explanation 0

// Boundary Elements-1,2,3,4,5,1,6,2,7,6,5,4,3,7,2,6

// Diagonal Elements(without counting an element twice)-7,4,1,9,4,8

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  // console.log("input", input);

  var numberOfRows = Number(input[0]);
  // console.log("numberOfRows", numberOfRows);

  var matrix = [];

  for (var i = 1; i <= numberOfRows; i++) {
    matrix.push(input[i].split(" ").map(Number));
  }

  // console.log("matrix", matrix);

  var sum = 0;

  for (var i = 0; i < numberOfRows; i++) {
    for (var j = 0; j < numberOfRows; j++) {
      if (
        i === j ||
        i + j === numberOfRows - 1 ||
        i === numberOfRows - numberOfRows ||
        i === numberOfRows - 1 ||
        j === numberOfRows - numberOfRows ||
        j === numberOfRows - 1
      ) {
        sum = sum + matrix[i][j];
      }
    }
  }
  console.log(sum);
}
