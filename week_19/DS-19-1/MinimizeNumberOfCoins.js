// Minimize number of coins
// Description

// Given a value V, if we want to make change for V Rs, and we have infinite each of these 
// denominations, i.e., we have infinite supply of 
// { 1, 2, 5, 10, 20, 50, 100, 500, 1000} valued coins/notes, what is the 
// minimum number of coins and/or notes needed to make the change?

// Input
// Input Format:

// First line contains T which is the number of test cases

// Next T line contains V in each line.

// Constraints:

// T <= 1000

// V <= 100000

// Output
// Print the minimum number of coins/notes

// Sample Input 1 

// 3
// 45
// 93
// 29
// Sample Output 1

// 3
// 5
// 4

// TC - O(N)
function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
//   console.log("n", n);

  for (let i = 1; i <= n; i++) {
    const result = calculate(Number(input[i]));
    console.log(result);
  }
}

const calculate = (amount) => {
  const notes = [1, 2, 5, 10, 20, 50, 100, 500, 1000];
  let count = 0;

  for (let i = notes.length - 1; i >= 0; i--) {
    while (notes[i] <= amount) {
      amount = amount - notes[i];
      count++;

      if (amount <= 0) {
        return count;
      }
    }
  }
};

runProgram("3\n45\n93\n1");
