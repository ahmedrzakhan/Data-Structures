
// Four-Not Four Sort
// Description

// You are given an array of non-negative integers. Your task is to sort
//  them in a way such that all the integers whose digit sum is divisible 
//  by 4 are sorted in increasing order separated by all integers whose digits 
//  sum is not divisible by 4 and these are also sorted in increasing order on 
//  their own. Look at the following example to understand clearly

// Suppose there are following integers 88 24 20 4 23. If you divide them into 
// 2 different groups - one with digits sum that is divisible by 4 and other 
// with digits sum not divisible by 4 then you will have 4, 88 (with digits 
//     sum divisible by 4) and 20, 23, 24 (all whose digits are not divisible by 4). 
//     The final answer will be 4 88 20 23 24

// Please note that you must NOT use a built-in sorting function anywhere. You are 
// supposed to write your own sorting algorithm

// Input
// First-line contains n which is the number of the element present in the array

// Second-line contains n space-separated non-negative integers

// Output
// Output all integers of the array sorted in a particular fashion as given in the problem statement

// Sample Input 1 

// 5
// 88 24 20 4 23
// Sample Output 1

// 4 88 20 23 24

function runProgram(input) {
    input = input.trim().split("\n");
  
    let n = Number(input[0]);
  //   console.log("n", n);
  
    let arr = input[1].trim().split(" ").map(Number);
  //   console.log("arr", arr);
  
    let a = [],
      b = [];
  
    for (let i = 0; i < n; i++) {
      let val = arr[i].toString().split("").map(Number);
      // console.log("val", val);
  
      let sum = val.reduce((acc, ele) => acc + ele, 0);
      // console.log("sum", sum);
  
      if (sum % 4 === 0) {
        a.push(arr[i]);
      } else {
        b.push(arr[i]);
      }
    }
  //   console.log("a", a);
  //   console.log("b", b);
  
    const newA = BS(a);
    const newB = BS(b);
  
  //   console.log("newA", newA);
  //   console.log("newB", newB);
  
  
    console.log(...newA, ...newB)
  }

  // Merge Sort to clear all test cases
  
  const BS = (arr) => {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      for (let j = 0; j < n - i - 1; j++) {
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
  
  runProgram("5\n88 24 20 4 23");
  