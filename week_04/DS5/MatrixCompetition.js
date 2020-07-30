// You are given two matrices (2D array). The first array A (n rows and m columns)
//  and second array B (i rows and j columns).

// Output sum of the matrix which is greater than sum of other matrix.

// PLEASE DON'T CONVERT YOUR 2D ARRAY TO 1D ARRAY FOR THIS TASK because this
// question is to make you comfortable in 2d array

// Input Format

// First line contains n and m (number of rows and columns of first matrix).

// Next n lines contains m elements which are elements of first matrix.

// Next line contains i and j (number of rows and columns of second matrix).

// Next i lines contain j elements which are elements of second matrix.

// Constraints

// n<100

// m<100

// i<100

// j<100

// Output Format

// Output one number, which is the sum of elements of that matrix whose sum is greater
// than other.

// Sample Input 0

// 3 4
// 1 2 3 4
// 0 5 6 1
// 9 3 0 8
// 2 2
// 8 8
// 8 8
// Sample Output 0

// 42
// Explanation 0

// Sum of elements present in first matrix is 42 and sum of elements present in second matrix is 32.

// So, the answer is 42

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  // console.log('input', input);

  var [row1, column1] = input[0].split(" ").map(Number);

  // console.log('row1, column1', row1, column1);

  var matrix = [];
  var line = 1;
  for (var i = line; i <= row1; i++) {
    matrix.push(input[i].split(" ").map(Number));
  }

  // console.log('matrix', matrix);

  sumOfMatrix = calculateSum(matrix);
  // console.log('sumOfMatrix', sumOfMatrix);

  var nextRow = line + row1;

  var [row2, column2] = input[nextRow].split(" ").map(Number);
  // console.log(row2, column2);

  var matrix2 = [];
  for (var m2 = nextRow + 1; m2 <= nextRow + row2; m2++) {
    matrix2.push(input[m2].split(" ").map(Number));
  }
  // console.log('matrix2', matrix2);
  //
  sumOfMatrix2 = calculateSum2(matrix2);
  // console.log('sumOfMatrix2', sumOfMatrix2);

  if (sumOfMatrix > sumOfMatrix2) {
    console.log(sumOfMatrix);
  } else {
    console.log(sumOfMatrix2);
  }
}

var calculateSum = function (matrix) {
  sum = 0;
  // console.log(matrix);

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      // console.log(i, j)
      sum = sum + matrix[i][j];
    }
  }
  // console.log(sum);

  return sum;
};

var calculateSum2 = function (matrix) {
  sum = 0;
  // console.log(matrix);

  for (var i = 0; i < matrix.length; i++) {
    for (var j = 0; j < matrix[i].length; j++) {
      // console.log(i, j)
      sum = sum + matrix[i][j];
    }
  }
  // console.log(sum);

  return sum;
};
