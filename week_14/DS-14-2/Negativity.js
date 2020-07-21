// You are given an array of N integers. Find the total count of negative elements present 
// in the array.

// Input Format

// First line contains N integers

// Second line contains N space separated integers which constitute the array.

// Constraints

// N < 100

// Output Format

// Output the number of negative integers present in the array

// Sample Input 0

// 5
// -3 0 -5 9 8
// Sample Output 0

// 2

function processData(input) {
  //Enter your code here

  input = input.split("\n");

  let n = Number(input[0]),
    arr = input[1].split(" ").map(Number);
  let count = 0;

  // console.log(n, arr);

  let result = countNegative(arr, n, 0, count);
  console.log(result);
}

const countNegative = function (a, n, i, c) {
  if (i === n) {
    return c;
  } else {
    if (a[i] < 0) {
      c++;
    }
    return countNegative(a, n, i + 1, c);
  }
};
