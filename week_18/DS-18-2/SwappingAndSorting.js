// Perform Swapping and Sorting
// Description

// You are given an array and an integer K .The challenge is to produce the  
// minimal array after at most K-swaps. Only consecutive pairs of elements can be swapped.

// Find the minimal array possible after at most K-swaps.

// Input
// Input Format

// The first line contains an integer T i.e. the number of Test cases. T test cases follow.

// Each test case has 2 lines. The first line contains N(number of elements in array) and 
// K(number of swaps).The second line contains n integers of the array.

// Constraints

// 1<=T<=10

// 1<=N,K<=1000

// 1<=A[i]<=1000000

// Output
// Output Format

// Print the lexicographical minimal array.

// Sample Input 1 

// 2
// 3 2
// 5 3 1
// 5 3
// 8 9 11 2 1
// Sample Output 1

// 1 5 3 
// 2 8 9 11 1

function runProgram(input) {
  input = input.trim().split("\n");
  let tcs = Number(input[0]);

  for (let i = 1; i < input.length; i++) {
    let [n, K] = input[i++].trim().split(" ").map(Number);
    let arr = input[i].trim().split(" ").map(Number);
    // console.log("arr, n", arr, n);

    let result = performSwap(arr, n, K);
    console.log(...result);
  }
}

const performSwap = (arr, n, K) => {
  for (let i = 0; i < n - 1; i++) {
    let pos = i;
    for (let j = i + 1; j <= K + i; j++) {
      if (arr[j] < arr[pos]) {
        pos = j;
      }
    }

    for (let l = pos; l > i; l--) {
      let temp = arr[l - 1];
      arr[l - 1] = arr[l];
      arr[l] = temp;
      K--;
    }
  }
  return arr;
};

runProgram("1\n5 3\n8 2 11 10 1");
