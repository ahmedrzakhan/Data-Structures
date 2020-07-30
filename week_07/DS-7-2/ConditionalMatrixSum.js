// You are given a matrix(2 dimensional array) of integers of n rows and m columns.
// Your task is to write a programme that calculates sum of all such integers present
// in the matrix which are divisible by 3.

// Input Format

// First line contains n and m.

// In the next n lines, there are m integers in each line which makes up elements of matrix.

// Constraints

// n<100

// m<100

// Output Format

// Output one number which is the sum of all such integers which are divisible by 3.

// Sample Input 0

// 2 3
// 3 1 8
// 2 6 0
// Sample Output 0

// 9
// Explanation 0

// The given 2 dimensional array has 2 rows and 3 columns.

// There are two integers present in this array which are divisible by 3 (those are
// 3 and 6). So, the output is 9.

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  // console.log('input', input);

  numberOfRows = Number(input[0]);
  numberOfColumns = Number(input[1]);

  var [numberOfRows, numberOfColumns] = input[0].split(" ").map(Number);

  // console.log('numberOfRows', numberOfRows);
  // console.log('numberOfColumns', numberOfColumns);

  var matrix = [];
  //     row = input[1].split(' ').map(Number);
  //     console.log('row', row);

  //     rowCol = row[1];
  //     console.log('rowCol', rowCol);

  for (var i = 1; i <= numberOfRows; i++) {
    row = input[i].split(" ").map(Number);

    for (var j = 0; j < numberOfColumns; j++) {
      rowCol = row[j];
      // console.log('rowCol', rowCol);
      if (rowCol % 3 === 0) {
        matrix.push(rowCol);
      }
    }
  }

  // console.log('matrix', matrix);

  sum = matrix.reduce(function (acc, k) {
    return acc + k;
  }, 0);

  console.log(sum);
}
