// You are given an array of N positive integers. Write a program to output the product 
// of all the elements present in the array.

// Input Format

// First line contains N.

// Second line contains N space separated integers

// Constraints

// N<100

// Output Format

// Output one number which is the product of all elements.

// Sample Input 0

// 5
// 3 5 2 9 4
// Sample Output 0

// 1080

function processData(input) {
  //Enter your code here

  let [n, arr] = input.split("\n");

  n = Number(n);
  arr = arr.split(" ").map(Number);

  // console.log(n, arr);

  let result = calculateProduct(arr, n, 0);
  console.log(result);
}

const calculateProduct = function (a, n, i) {
  if (i === n - 1) {
    return a[i];
  } else {
    return a[i] * calculateProduct(a, n, i + 1);
  }
};
