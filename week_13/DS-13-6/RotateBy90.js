// Given a square matrix, turn it by 90 degrees in anti-clockwise direction

// Input Format

// First line will contain the number of rows n (same as the number of columns)

// After that next n lines will n rows of the matrix

// Constraints

// n<=1000

// Elements Of the Matrix <= 10000

// Output Format

// You have to display the rotated matrix

// Sample Input 0

// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8
// Sample Output 0

// 4 8 4 8
// 3 7 3 7
// 2 6 2 6
// 1 5 1 5

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  let n = Number(input[0]);
  let arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(input[i].split(" ").map(Number));
  }

  // console.log("arr", arr);

  for (let j = n - 1; j >= 0; j--) {
    let row = "";
    for (i = 0; i < n; i++) {
      row = row + arr[i][j] + " ";
    }
    console.log(row);
  }
}

// Minimize Space Complexity

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  // console.log("input", input);

  let n = Number(input[0]);
  input.shift();

  let matrix = input.map((a) => a.split(" "));
  // console.log("matrix", matrix);

  for (let i = 0; i < Math.floor(n / 2); i++) {
    for (let j = i; j < n - i - 1; j++) {
      // console.log("i, j", i, j);
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][n - i - 1];
      matrix[j][n - i - 1] = matrix[n - i - 1][n - j - 1];
      matrix[n - i - 1][n - j - 1] = matrix[n - j - 1][i];
      matrix[n - j - 1][i] = temp;
    }
  }

  console.log(matrix.map((a) => a.join(" ")).join("\n"));
}
