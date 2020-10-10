// Equilibrium Element
// Description

// Given an array A of N positive numbers. The task is to find the position where 
// equilibrium first occurs in the array. Equilibrium position in an array is a position 
// such that the sum of elements before it is equal to the sum of elements after it.

// Input
// Input Format

// First line contains an integer N denoting the size of the array.

// Then in the next line are N space separated values of the array A.

// N <= 1000

// Ai <= 10000

// Output
// In a new line print the position at which the elements are at equilibrium if no equilibrium
//  point exists print -1.

// Sample Input 1 

// 5
// 3 3 5 5 1
// Sample Output 1

// 3

// TC_O(N) SC_O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  //   console.log("n", n);

  let arr = input[1].trim().split(" ").map(Number);
  //   console.log("arr", arr);

  let i = 0,
    j = n - 1,
    k = 0;

  let sum = 0,
    revSum = 0;
  let equil = -1;

  while (
    k < n - 1 &&
    i <= Math.floor(n / 2) - 1 &&
    j >= Math.floor(n / 2) + 1
  ) {
    sum = sum + arr[i];
    // console.log("i, sum", i, sum);
    i++;

    revSum = revSum + arr[j];
    // console.log("j, revSum", j, revSum);
    j--;

    if (sum === revSum) {
      equil = i + 1;
      break;
    }

    k++;
  }
  console.log(equil);
}

runProgram("5\n3 3 5 5 1");
runProgram("5\n1 3 5 90 91");

