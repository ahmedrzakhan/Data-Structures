// Maximum Sum & Permutation
// Description

// Given an array of n elements. You can arrange the elements whichever way you
//  want to. All you need to do is to find that permutation of integers of the 
//  array in which the sum of index multiplied by arr[index] is maximum.

// Basically maximum possible value of:

// Σ arr[i] * i

// Input
// Input Format:

// First-line contains n

// Second-line contains n space-separated integers

// Constraints:

// n <= 100000

// Output
// Output the maximum sum for the given expression

// Sample Input 1 

// 4
// 2 5 1 6
// Sample Output 1
// 30

function runProgram(input) {

  input = input.split("\n");

  let n = Number(input[0]);

  let sum = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
    .map((ele, index) => ele * index)
    .reduce((acc, ele) => acc + ele, 0);

  //   console.log(n, arr);

  console.log(sum);
}

runProgram("4\n2 5 1 6");
