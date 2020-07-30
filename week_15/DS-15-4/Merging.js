// Perform Merging
// Description

// You are given two sorted arrays each of length N. Your task is to write a
// program that merges both the arrays such that the final array formed after merging is sorted.

// Note: You must not use sort() function in your entire code

// Input
// Input Format :

// First line contains N which is the number of integers present in both the arrays.

// Second line contains N sorted integers which are elements of first array.

// Third line contains N sorted integers which are elements of second array.

// Constraints :

// N < 1000

// Output
// Output the array formed after merging elements such that it is sorted

// Sample Input 1

// 4
// 1 5 7 9
// 2 4 6 8
// Sample Output 1

// 1 2 4 5 6 7 8 9

function runProgram(input) {
  // Write code here
  //   console.log("input", input);
  input = input.split("\n");

  let n = Number(input[0]);
  //   console.log("n", n);

  let arr1 = input[1].split(" ").map(Number);
  //   console.log("arr1", arr1);

  let arr2 = input[2].split(" ").map(Number);
  //   console.log("arr2", arr2);

  let newArr = arr1.concat(arr2);
  //   console.log("newArr", newArr);

  let result = bubbleSort(newArr);
  console.log(...result);
}

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

runProgram("4\n1 5 7 9\n2 4 6 8");
