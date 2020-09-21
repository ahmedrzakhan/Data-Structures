// OES Sort
// Description

// You are given an array of non-negative integers. Your task is to sort them after 
// separating the array into two different groups such that all the integers whose digit 
// sum is odd are on one side and all integers whose digits sum is even on other side and 
// each group should be sorted in increasing order.

// Look at the following example to understand clearly

// Suppose there are following integers 12, 45, 66, 100, 200. If you divide them into 2 
// different groups - one with digits sum as odd and other with digits sum as even then 
// you will have 12, 45, 100 (with odd digits sum) and 66, 200 (all even digits sum). The 
// final answer will be 12 45 100 66 200 [all odd digit sum sorted in increasing order 
//     followed by all even digit sum sorted in increasing order]

// Please note that you must NOT use a built-in sorting function anywhere. You are supposed 
// to write your own sorting algorithm

// Input
// First-line contains n which is the number of the element present in the array

// Second-line contains n space-separated non-negative integers

// Output
// Output all integers of the array sorted in a particular fashion as given in the problem statement

// Sample Input 1 

// 8
// 121 384 103 100 200 400 757 481
// Sample Output 1

// 100 384 481 757 103 121 200 400 

function runProgram(input) {
    input = input.trim().split("\n");
  
    let n = Number(input[0]);
  //   console.log("n", n);
    let arr = input[1].trim().split(" ").map(Number);
  //   console.log("arr", arr);
  
    let even = [],
      odd = [];
  
    for (let i = 0; i < arr.length; i++) {
      let val = arr[i]
        .toString()
        .split("")
        .map(Number)
        .reduce((acc, ele) => acc + ele, 0);
  
      // console.log("val", val);
  
      if (val % 2 === 0) {
        even.push(arr[i]);
      } else {
        odd.push(arr[i]);
      }
    }
  //   console.log("odd", odd);
  //   console.log("even", even);
  
    const sortedEven = customSort(even);
    const sortedOdd = customSort(odd);
  
  //   console.log("sortedEven", sortedEven);
  //   console.log("sortedOdd", sortedOdd);
  
    console.log(sortedOdd.concat(sortedEven).join(' '))
  }
  
  const customSort = (arr) => {
    let start = 0,
      end = arr.length - 1;
  
    const result = mergeSort(arr, start, end);
    return result;
  };
  
  const mergeSort = (arr, start, end) => {
    if (start < end) {
      let mid = start + Math.floor((end - start) / 2);
      mergeSort(arr, start, mid);
      mergeSort(arr, mid + 1, end);
      merge(arr, start, end);
    }
    return arr;
  };
  
  const merge = (arr, start, end) => {
    let mid = start + Math.floor((end - start) / 2);
  
    let i = start,
      j = mid + 1,
      k = start;
    let temp = [];
  
    while (i <= mid && j <= end) {
      if (arr[i] < arr[j]) {
        temp[k++] = arr[i++];
      } else {
        temp[k++] = arr[j++];
      }
    }
  
    while (i <= mid) {
      temp[k++] = arr[i++];
    }
  
    while (j <= end) {
      temp[k++] = arr[j++];
    }
  
    for (let l = start; l <= end; l++) {
      arr[l] = temp[l];
    }
  
    return arr;
  };
  
  runProgram("8\n121 384 103 100 200 400 757 481");
  