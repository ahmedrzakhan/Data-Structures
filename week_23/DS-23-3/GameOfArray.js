// Game of array!
// Description

// Pavan is very fond of numbers.He made an array of numbers of length N, and he
// wants to know the pattern after rotating it to the left by k times. He got confused
// in the middle since the array is very big can you help him to find the rotated array?

// Input
// First line consists of two integers N and k separated by space,

// Second line contains an array of N integers separated by space.

// 1 <= N,k <= 10^6

// Output
// Print output array after k rotations.

// Sample Input 1

// 6 4
// 1 2 5 4 0 6
// Sample Output 1

// 0 6 1 2 5 4

function runProgram(input) {
  input = input.trim().split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
  // console.log("n, k", n, k);

  let arr = input[1].trim().split(" ").map(Number);
  // console.log("arr", arr);

  for (let i = 0; i < k; i++) {
    let ele = arr.shift();
    arr.push(ele);
  }

  console.log(arr.join(" "));
}

// Using Slice

function runProgram(input) {
  input = input.trim().split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
  // console.log("n, k", n, k);

  let arr = input[1].trim().split(" ").map(Number);
  // console.log("arr", arr);

  k = k % n;

  let firstSlice = arr.slice(k, n);
  // console.log(firstSlice);

  let secondSlice = arr.slice(0, k);
  // console.log(secondSlice);

  console.log(firstSlice.concat(secondSlice).join(" "));
}

runProgram("6 4\n1 2 5 4 0 6");
