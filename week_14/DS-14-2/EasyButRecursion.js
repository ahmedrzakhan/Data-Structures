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
  input = input.split("\n");

  let tcs = Number(input[0]);
  //   console.log("tcs", tcs);

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i++]);
    let arr = input[i].split(" ").map(Number);

    let result = getSum(arr, n - 1, 0);
    console.log(result);
    // console.log(n, arr)
  }
}

const getSum = (arr, n, sum) => {
  if (n === -1) {
    return sum;
  } else {
    sum = sum + arr[n];

    return getSum(arr, n - 1, sum);
  }
};

processData("3\n5\n6 3 8 2 -4\n5\n-10 -7 10 2 -2\n5\n-4 -5 6 -3 9");
