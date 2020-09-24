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

  // if K is gretaer than N
  k = k % n;
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

// TC- O(N * K)
function runProgram(input) {
  input = input.trim().split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
  // console.log("n, k", n, k);

  let arr = input[1].trim().split(" ").map(Number);
  // console.log("arr", arr);

  k = k % n;
  for (let i = 0; i < k; i++) {
    rotate(arr, n);
  }
  console.log(arr.join(" "));
}

const rotate = (arr, n) => {
  for (let i = 0; i < n - 1; i++) {
    let temp = arr[i];
    arr[i] = arr[i + 1];
    arr[i + 1] = temp;
  }
};

// TC- O(N)
function runProgram(input) {
  input = input.trim().split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
  // console.log("n, k", n, k);

  let arr = input[1].trim().split(" ").map(Number);
  // console.log("arr", arr);

  k = k % n;
  let temp = [];
  for (let i = 0; i < n; i++) {
    temp[i] = arr[((k % n) + i) % n];
  }
  console.log(temp.join(" "));
}

runProgram("6 4\n1 2 5 4 0 6");
