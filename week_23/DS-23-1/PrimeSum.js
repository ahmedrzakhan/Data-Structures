// Prime Sum
// Description

// You are given an array of n positive integers. Your task is to find the sum of the 
// count of the number of times the first two prime numbers are present in the array

// Input
// First-line contains n which is the number of integers present in the array

// Second-line contains n space-separated integers

// n<1000000

// Output
// Output the sum of counts as given in the problem statement

// Sample Input 1 

// 8
// 2 3 1 1 3 2 5 6
// Sample Output 1

// 4

function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);

  let arr = input[1].split(" ").map(Number);
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (arr[i] === 2 || arr[i] === 3) {
      count++;
    }
  }
  console.log(count);
}

runProgram("8\n2 3 1 1 3 2 5 6");
