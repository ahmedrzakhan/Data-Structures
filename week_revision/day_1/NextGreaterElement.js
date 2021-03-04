// Next Greater Element
// Description

// Given an array of N elements, find the next greater element for each element in the array,
//  print -1 if it does not exits. Refer to the sample I/O for better understanding

// Input
// The first line contains T, the number of test cases.

// The first line of each test case contains N, the number of elements in the array. The
//  next line contains N space separated integers denoting the elements of the array

// Constraints

// 1 <= T <= 10

// 1 <= N <= 10^5

// 0 <= A[i] <= 10000

// Output
// For each test case, print N space separated integers, denoting the next greater element 
// for each element,  on a new line.

// Sample Input 1

// 1
// 4
// 1 3 2 4
// Sample Output 1

// 3 4 4 -1

// HINT
// In the sample test case, the array contains 4 elements, and for the first element, 
// the next greater element will be 3, similarly for the next element, the next greater 
// element will be 4, and for the third element as well, the next greater element will 
// be 4. Since, the last element has no elements ahead of it, the next greater element 
// will be -1.

// TC - O(N2)
// SC - O(N)
function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log("input", input);

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i].trim());
    // console.log("n", n);

    let arr = input[++i].split(" ").map(Number);
    // console.log("arr", arr);

    let result = getNextValues(arr, n);
    console.log(...result);
  }
}

function getNextValues(a, n) {
  let res = [];
  for (let i = 0; i < n; i++) {
    let val = undefined;
    for (let j = i + 1; j < n; j++) {
      if (a[j] > a[i]) {
        val = a[j];
        break;
      }
    }
    if (val) {
      res.push(val);
    } else {
      res.push(-1);
    }
  }
  return res;
}

// runProgram("1\n4\n1 3 2 4");
runProgram("2\n4\n2 1 2 1\n4\n 1 3 2 4");
