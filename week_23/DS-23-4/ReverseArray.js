// Reverse An Array(Constant space complexity)
// Description

// Given an array of integers of length N, write a program to reverse the 
// array with constant space complexity.

// Note: The approach should be a constant space complexity i.e, O(1)


// Input
// Input Format

// First line contains the length of the array N.

// Second line contains N number of integers separated by spaces.

// Constraints

// 1 <= N<= 100


// Output
// Print the reversed array


// Sample Input 1 

// 6
// 1 5 4 3 2 6
// Sample Output 1

// 6 2 3 4 5 1

// TC O(N) SC O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  //   console.log("n", n);

  let arr = input[1].trim().split(" ").map(Number);
  //   console.log("arr", arr);

  let temp;
  for (let i = 0; i < n / 2; i++) {
    temp = arr[i];
    arr[i] = arr[n - i - 1];
    arr[n - i - 1] = temp;
  }

  console.log(arr.join(' '));
}

runProgram("6\n1 5 4 3 2 6");
