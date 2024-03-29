// Smaller Neighbour Element
// Description

// Given an array, find the nearest smaller element G[i] for every element A[i]
//  in the array such that the element has an index smaller than i.

// Mathematically,

// G[i] for an element A[i] is an element A[j] such that

// j is maximum possible AND

// j < i AND

// A[j] < A[i]

// Note: Elements for which no smaller element exist, consider next smaller element as -1.

// Input
// Input Format:

// First line contains an integer N denoting the number of elements in the array 
// (not necessarily distinct).

// Second line contains N space separated integers denoting the elements of the array.

// Constraints:

// N <= 100000

// Output
// Print N space separated integers denoting the array G.

// Sample Input 1 

// 8
// 39 27 11 4 24 32 32 1
// Sample Output 1

// -1 -1 -1 -1 4 24 24 -1

// TC_O(N) SC_O(N)
function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
//   console.log("n", n);

  let arr = input[1].trim().split(" ").map(Number);
//   console.log("arr", arr);

  let stack = [],
    result = "";

  for (let i = 0; i < n; i++) {
    while (stack.length !== 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    if (stack.length === 0) {
      result = result + -1 + " ";
    } else {
      result = result + stack[stack.length - 1] + " ";
    }
    stack.push(arr[i])
  }

  console.log(result);
}

runProgram("8\n39 27 11 4 24 32 32 1");
