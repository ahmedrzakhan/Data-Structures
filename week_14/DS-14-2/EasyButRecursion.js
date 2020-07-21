// This is an easy question. You just have to find the sum of an array given the 
// elements of the array.

// The only constraint is that you have to write a recursive code

// Input Format

// There are several test cases within a test case.

// First line contains t which is the number of test cases

// First line of each test case contains n which is the number of integers

// Second line of each test case contains n space separated integers

// Constraints

// n <= 100000

// arr[i] <= 10

// Output Format

// Output t lines where each line contains sum of all the elements in that test case

// Sample Input 0

// 3
// 5
// 6 3 8 2 -4
// 5
// -10 -7 10 2 -2
// 5
// -4 -5 6 -3 9
// Sample Output 0

// 15
// -7
// 3

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  let tcs = Number(input[0]);
  // console.log("tcs", tcs);

  let line = 1;

  for (let i = 0; i < tcs; i++) {
    let n = Number(input[line++]);
    let arr = input[line++].split(" ").map(Number);
    // console.log(n, arr);
    let result = calculateSum(arr, n, 0);
    console.log(result);
  }
}

const calculateSum = function (a, n, i) {
  if (i === n - 1) {
    return a[i];
  } else {
    return a[i] + calculateSum(a, n, i + 1);
  }
};

processData("3\n5\n6 3 8 2 -4\n5\n-10 -7 10 2 -2\n5\n-4 -5 6 -3 9");
