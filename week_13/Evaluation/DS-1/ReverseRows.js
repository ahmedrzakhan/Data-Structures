// You will be given an n by n matrix. You'll have to reverse the elements of each row of 
// the matrix

// Input Format

// First line will contain the number of rows n (same as the number of columns)

// After that next n lines will n rows of the matrix

// Constraints

// n<=1000

// Elements Of the Matrix <= 10000

// Output Format

// You have to print the flipped matrix

// Sample Input 0

// 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// Sample Output 0

// 4 3 2 1
// 4 3 2 1
// 4 3 2 1
// 4 3 2 1

function processData(input) {
  //Enter your code here

  input = input.split("\n");

  let n = Number(input[0]);

  let mat = [];

  for (let i = 1; i <= n; i++) {
    mat.push(input[i].split(" ").map(Number));
  }

  // console.log("mat", mat);
  let a = [];

  for (let i = 0; i < n; i++) {
    // console.log(mat[i]);
    a.push(mat[i].reverse().join(" "));
  }
  // console.log(a);
  console.log(a.join("\n"));
}
