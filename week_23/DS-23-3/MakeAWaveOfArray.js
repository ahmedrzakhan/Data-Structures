// Make a wave of Array
// Description

// Given an array of length N , sort the array into a wave-like pattern.

// An array is sorted in waveform if arr[0] >= arr[1] <= arr[2] >= arr[3] <= arr[4] >=  
// and so on ...

// Input
// Input Format

// First Line consists of the length of array N

// Second Line consists of N integers separated by spaces.

// Constraints

// 1 <= N <= 10^6

// Output
// Print the output array.


// Sample Input 1 

// 10
// 9 8 4 10 3 6 5 7 1 2
// Sample Output 1

// 2 1 4 3 6 5 8 7 10 9


function runProgram(input) {
  input = input.trim().split("\n");
  let n = Number(input[0]);
//   console.log("n", n);

  let arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
//   console.log("arr", arr);

  for (let i = 0; i < n; i++) {
    if (arr[i] <= arr[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
      i++;
    }
  }

  console.log(arr.join(' '));
}

runProgram("10\n9 8 4 10 3 6 5 7 1 2");
