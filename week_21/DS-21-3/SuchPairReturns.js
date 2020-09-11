// Such Pair Returns
// Description

// You are given N integers and K, your task is to write a program that prints
// "1" (without quotes) if there are 2 integers present in the array whose sum
// is K. Else print "-1" (without quotes).

// Input
// Input Format :

// First line contains 2 space separated integers: N & K

// Second line contains **N** space separated integers

// Constraints :

// N<1000000

// Output
// Output 1/-1 depending on the condition

// Sample Input 1

// 5 2
// 3 4 0 2 7
// Sample Output 1

// 1

// TC - O(N)
// Two Pointer Technique

function runProgram(input) {
  input = input.trim().split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
  // console.log("n, k", n, k);

  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  // console.log("arr", arr);

  let lo = 0,
    hi = n - 1;

  const twoPointer = (lo, hi) => {
    while (lo < hi) {
      if (arr[lo] + arr[hi] === k) {
        return 1;
      } else if (arr[lo] + arr[hi] > k) {
        hi--;
      } else if (arr[lo] + arr[hi] < k) {
        lo++;
      }
    }
    return -1;
  };

  const result = twoPointer(lo, hi);
  console.log(result);
}

runProgram("5 11\n3 4 0 2 7");
