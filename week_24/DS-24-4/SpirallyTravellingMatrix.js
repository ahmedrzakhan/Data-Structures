// Spirally Traversing a Matrix
// Description

// Given a matrix of size n by n. Traverse and print the matrix in spiral form.

// Input
// Input Format

// First-line contains n

// The next n lines contain the matrix

// Constraints

// n <= 1000

// Ai <= 10000

// Output
// Print the matrix in a single line traversing it spirally

// Sample Input 1

// 4
// 1 2 3 4
// 5 6 7 8
// 1 2 3 4
// 5 6 7 8
// Sample Output 1

// 1 2 3 4 8 4 8 7 6 5 1 5 6 7 3 2

// O(N2)
function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  //   console.log("n", n);
  input.shift();

  let matrix = input.map((ele) => ele.split(" ").map(Number));
  //   console.log("matrix", matrix);

  let top = 0,
    bottom = n - 1;
  let spiral = "";

  while (top < bottom) {
    for (let j = top; j <= bottom; j++) {
      spiral = spiral + matrix[top][j] + " ";
    }
    // console.log("spiral", spiral);

    for (let i = top + 1; i <= bottom; i++) {
      spiral = spiral + matrix[i][bottom] + " ";
    }
    // console.log("spiral", spiral);

    for (let j = bottom - 1; j >= top; j--) {
      spiral = spiral + matrix[bottom][j] + " ";
    }
    // console.log("spiral", spiral);

    for (let i = bottom - 1; i > top; i--) {
      spiral = spiral + matrix[i][top] + " ";
    }
    // console.log("spiral", spiral);

    top++;
    bottom--;
  }

  //   console.log(Math.floor(n / 2))
  // for odd number of matrix
  //   spiral = spiral + matrix[Math.floor(n / 2)][Math.floor(n / 2)]

  console.log(spiral);
}

runProgram(
  "5\n1 2 3 4 5\n5 6 7 8 9\n1 2 3 4 5\n5 6 7 8 9\n1 2 3 4 5\n5 6 7 8 9"
);

// runProgram(
//   "6\n1 2 3 4 5 6\n5 6 7 8 9 10\n1 2 3 4 5 6\n5 6 7 8 9 10\n1 2 3 4 5 6\n5 6 7 8 9 10"
// );
