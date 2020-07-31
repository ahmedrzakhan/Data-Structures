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
  input = input.split("\n");
  //   console.log("input", input);

  //   let n = Number(input[0]);
  // console.log("n", n);

  let arr1 = input[1].split(" ").map(Number);
  //   console.log("arr1", arr1);

  let arr2 = input[2].split(" ").map(Number);
  //   console.log("arr2", arr2);

  let i = 0,
    j = 0,
    n = arr1.length,
    m = arr2.length,
    arr3 = [];

  while (i < n && j < m) {
    if (arr1[i] < arr2[j]) {
      arr3.push(arr1[i]);
      i++;
    } else {
      arr3.push(arr2[j]);
      j++;
    }
  }

  if (i < n) {
    while (i < n) {
      arr3.push(arr1[i]);
      i++;
    }
  }

  if (j < m) {
    while (j < m) {
      arr3.push(arr2[j]);
      j++;
    }
  }
  console.log(...arr3);
}

runProgram("4\n1 5 7 9\n2 4 6 8");
