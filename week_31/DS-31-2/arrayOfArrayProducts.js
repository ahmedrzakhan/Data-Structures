// Array of Array Products
// Given an array of integers arr, you’re asked to calculate for each index
//  i the product of all integers except the integer at that index (i.e. except
// arr[i]). Implement a function arrayOfArrayProducts that takes an array of integers
//  and returns an array of the products.

// Solve without using division and analyze your solution’s time and space complexities.

// Examples:

// input:  arr = [8, 10, 2]
// output: [20, 16, 80] # by calculating: [10*2, 8*2, 8*10]

// input:  arr = [2, 7, 3, 4]
// output: [84, 24, 56, 42]

// TC O(N2) SC O(N)
function arrayOfArrayProducts(arr) {
  // your code goes here
  let n = arr.length;

  if (n === 0 || n === 1) return [];

  let newArr = [];
  for (let i = 0; i < n; i++) {
    let prod = 1;

    for (let j = 0; j < n; j++) {
      if (i !== j) {
        prod = prod * arr[j];
      }
    }
    newArr[i] = prod;
  }
  console.log(newArr);

  return newArr;
}

// TC O(N) SC O(1)
function arrayOfArrayProducts(arr) {
  let n = arr.length;

  const result = new Array(n).fill(1);

  if (n === 0 || n === 1) return [];

  let product = 1;
  for (let i = 0; i < n - 1; i++) {
    product *= arr[i];
    result[i + 1] = product;
  }
  product = 1;

  for (let i = n - 1; i > 0; i--) {
    product *= arr[i];
    result[i - 1] *= product;
  }
  return result;
}

console.log(arrayOfArrayProducts([2, 5, 6, 7]));
