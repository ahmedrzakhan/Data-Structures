// Pythagorean Triplets
// Description

// You'll be given an unsorted array. You need to find three elements (a,b,c) in
//  it such that a^2 + b^2 = c^2

// Input
// Input Format

// First line will contain the size of the array N.

// Next line will contain the array in form evenly spaced integers

// Constraints

// N <= 1000

// Ai <= 10000

// Output
// You have to print all the triplets in a different line in the form of three
//  evenly spaced integers (a b c)

// If no triplets are found print -1

// Sample Input 1 

// 8
// 1 2 3 4 5 6 8 10
// Sample Output 1

// 9 16 25
// 36 64 100

// TC_O(N3) SC_O(N2)
function runProgram(input) {
  input = input.trim().split("\n");
  let n = Number(input[0]);
  //   console.log("n", n);

  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  //   console.log("arr", arr);

  let matrix = [];
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (Math.pow(arr[i], 2) + Math.pow(arr[j], 2) === Math.pow(arr[k], 2)) {
          matrix.push([
            Math.pow(arr[i], 2),
            Math.pow(arr[j], 2),
            Math.pow(arr[k], 2),
          ]);
        }
      }
    }
  }
  if (matrix.length !== 0) {
    console.log(matrix.map((ele) => ele.join(" ").replace(",", "")).join("\n"));
  } else {
    console.log(-1);
  }
}

runProgram("8\n1 2 3 4 5 6 8 10");
runProgram("3\n1 2 3");
