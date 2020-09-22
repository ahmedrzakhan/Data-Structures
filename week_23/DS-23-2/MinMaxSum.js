// Min and Max sum
// Description

// You have given an array of size N and an integer M.

// Your task is to calculate the difference between maximum sum and minimum sum of 
// N-M elements of the given array.

// Do not use built-in functions to sort the array use selection sort Algorithm

// Input
// Input Format:

// First line contains an integer T denoting the number of testcases.

// First line of every testcase contains two integer N and M.

// Next line contains N space separated integers denoting the elements of array

// Constraints:

// 1<=t<=10

// 1<=N<=1000

// 1<=a[i]<=1000

// Output
// For every test case print your answer in new line

// Sample Input 1 

// 1
// 5 1
// 1 2 3 4 5
// Sample Output 1

// 4

function runProgram(input) {
  input = input.trim().split("\n");
  let tcs = Number(input[0].trim());
//   console.log("tcs", tcs);

  let line = 1;

  for (let i = 1; i <= tcs; i++) {
    let [n, m] = input[line++].trim().split(" ").map(Number);
    // console.log("n, m", n, m);

    let arr = input[line++].split(" ").map(Number);
    // console.log("arr", arr);

    let sorted = selectionSort(arr);
    // console.log("sorted", sorted);

    let result = getDiffMiniMax(sorted, n, m);
    console.log(result);
  }
}

const getDiffMiniMax = (arr, n, m) => {
  let diff,
    minSum = 0,
    maxSum = 0;

  for (let i = 0; i < n - m; i++) {
    minSum = minSum + arr[i];
    maxSum = maxSum + arr[i + m];
  }

//   console.log("minSum", minSum);
//   console.log("maxSum", maxSum);

  diff = maxSum - minSum;

  return diff;
};

const selectionSort = (a) => {
  let n = a.length;

  for (let i = 0; i < n - 1; i++) {
    let min = i;

    for (let j = i + 1; j < n; j++) {
      if (a[j] < a[min]) {
        swap(a, j, min);
      }
    }
  }
  return a;
};

const swap = (a, i, j) => {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
};

runProgram("1\n5 1\n1 2 3 4 5");
// runProgram("1\n5 1\n5 4 3 1 2");

// runProgram("2\n5 1\n1 2 3 4 5\n5 1\n1 2 3 4 5");
