// Make a Unique array (Constant Space complexity)
// Description

// Given a sorted array A of length N , remove the duplicates from the array
//  without using extra space.

// Note: Do solve it in constant space complexity i.e, O(1).

// Input
// Input Format

// First line contains an integer N

// Second line contains an array of n integers separated by spaces.

// Constraints

// 1<=N<=100

// Output
// Print unique array

// Sample Input 1

// 5
// 2 2 2 7 9
// Sample Output 1

// 2 7 9

function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  // console.log("n", n);

  let arr = input[1].trim().split(" ").map(Number);
  // console.log("arr", arr);

  let obj = {};

  for (let i = 0; i < n; i++) {
    obj[arr[i]] = arr[i];
  }

  // console.log(obj)

  console.log(Object.values(obj).join(" "));
}

runProgram("5\n2 2 2 7 9");

// O (N)
function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  // console.log("n", n);

  let arr = input[1].trim().split(" ").map(Number);
  //   console.log("arr", arr);

  let j = 0;

  for (let i = 1; i < n; i++) {
    if (arr[i] !== arr[j]) {
      arr[++j] = arr[i];
    }
  }
  //   console.log("arr", arr);
  console.log(arr.slice(0, j + 1).join(" "));
}

runProgram("5\n2 2 2 7 9");
