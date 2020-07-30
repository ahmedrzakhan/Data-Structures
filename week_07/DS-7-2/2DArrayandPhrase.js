// You are given an array of n rows and m columns which contains lower case English
//  letters. How many times does the phrase "saba" appear horizontally, vertically,
//  and diagonally in the grid?
// image

// Input Format

// First line: Two integer n and m, where n denotes the number of rows and m denotes the
// number of columns in the grid

// Next n lines: Each line contains m characters which contains lower-case English letters
//  only
// Constraints

// 1 <= n,m <= 100
// Output Format

// Print the number of times the word “saba” appears in the grid.
// Sample Input 0

// 5 5
// safer
// amjad
// babol
// aaron
// songs
// Sample Output 0

// 2

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  // console.log("input", input);
  var [rows, columns] = input[0].split(" ").map(Number);
  // console.log("rows", rows);
  // console.log("columns", columns);

  var phraseLength = "saba".length;
  var count = 0;
  var matrix = [];

  for (var l = 1; l <= rows; l++) {
    matrix.push(input[l]);
  }
  // console.log("matrix", matrix);

  //     ckecking if phrse present
  for (var i = 0; i < rows; i++) {
    for (var j = 0; j < columns; j++) {
      //  for Rows
      if (columns - j >= phraseLength) {
        // console.log('ROWS', i, j);
        if (
          matrix[i][j] === "s" &&
          matrix[i][j + 1] === "a" &&
          matrix[i][j + 2] === "b" &&
          matrix[i][j + 3] === "a"
        ) {
          count = count + 1;
        }
      }
      //         For Columns
      if (rows - i >= phraseLength) {
        // console.log('COLUMN', i, j);
        if (
          matrix[i][j] === "s" &&
          matrix[i + 1][j] === "a" &&
          matrix[i + 2][j] === "b" &&
          matrix[i + 3][j] === "a"
        ) {
          count = count + 1;
        }
      }

      //         For Diagonal Down
      if (columns - j >= phraseLength && rows - i >= phraseLength) {
        console.log("DIAG DOWN", i, j);
        if (
          matrix[i][j] === "s" &&
          matrix[i + 1][j + 1] === "a" &&
          matrix[i + 2][j + 2] === "b" &&
          matrix[i + 3][j + 3] === "a"
        ) {
          count = count + 1;
        }
      }

      //         For Diagonal Up
      if (columns - j >= phraseLength && i >= phraseLength - 1) {
        // console.log('DIAG UP', i, j);
        if (
          matrix[i][j] === "s" &&
          matrix[i - 1][j + 1] === "a" &&
          matrix[i - 2][j + 2] === "b" &&
          matrix[i - 3][j + 3] === "a"
        ) {
          count = count + 1;
        }
      }
    }
  }
  console.log(count);
}
