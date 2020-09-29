
// Rotate Elements
// Description

// Given a n by n matrix. You have to rotate the elements of each ring of the matrix 
// in the clockwise direction one place.


// Input
// Input Format

// First line will contain a single number n

// Next n lines will contain the matrix

// Constraints

// n<=1000

// Elements of the matrix <=10000

// Output
// You have to display the rotated matrix


// Sample Input 1 

// 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// 1 2 3 4
// Sample Output 1

// 1 1 2 3
// 1 2 2 4
// 1 3 3 4
// 2 3 4 4
// Hint


function runProgram(input) {
    // Write code here
    input = input.trim().split("\n");
  
    input.shift();
  
    let matrix = input.map((ele) => ele.split(" ").map(Number));
  //   console.log("matrix", matrix);
  
    let top = 0;
    let bottom = matrix.length - 1;
  
    while (top < bottom) {
      //   console.log("eee")
      let previous = matrix[top][top];
      let current = matrix[top][top + 1];
  
      for (let j = top + 1; j <= bottom; j++) {
        if (j === top + 1) {
          matrix[top][j] = previous;
        } else {
          previous = current;
          current = matrix[top][j];
          matrix[top][j] = previous;
        }
      //   console.log("top, j", top, j);
      }
  
      for (let i = top + 1; i <= bottom; i++) {
        previous = current;
        current = matrix[i][bottom];
        matrix[i][bottom] = previous;
      //   console.log("i, bottom", i, bottom);
      }
  
      for (let j = bottom - 1; j >= top; j--) {
        previous = current;
        current = matrix[bottom][j];
        matrix[bottom][j] = previous;
      //   console.log("bottom, j", bottom, j);
      }
  
      for (let i = bottom - 1; i >= top; i--) {
        previous = current;
        current = matrix[i][top];
        matrix[i][top] = previous;
      //   console.log("i, top", i, top);
      }
  
      top++;
      bottom--;
    }
  
    matrix.map((ele) => console.log(ele.join(" ")));
  }
  
  runProgram("4\n1 2 3 4\n1 2 3 4\n1 2 3 4\n1 2 3 4");
  