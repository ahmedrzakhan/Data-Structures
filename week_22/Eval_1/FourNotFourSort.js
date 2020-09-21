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
  let n = Number(input[0].trim());
  //   console.log("n", n);

  let arr = input[1].trim().split(" ").map(Number);
  //   console.log("arr", arr);

  let four = [],
    fourNot = [];

  for (let i = 0; i < n; i++) {
    let val = arr[i]
      .toString()
      .split("")
      .map(Number)
      .reduce((acc, ele) => acc + ele, 0);
    // console.log("val", val);

    if (val % 4 === 0) {
      four.push(arr[i]);
    } else {
      fourNot.push(arr[i]);
    }
  }

  //   console.log("four", four);
  //   console.log("fourNot", fourNot);

  const sortedFour = custSort(four);
  const sortedFourNot = custSort(fourNot);

  //   console.log("sortedFour", sortedFour);
  //   console.log("sortedFourNot", sortedFourNot);

  console.log(sortedFour.concat(sortedFourNot).join(" "));
}

const custSort = (arr) => {
  let start = 0,
    end = arr.length - 1;

  const sorted = mergeSort(arr, start, end);
  return sorted;
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

runProgram("5\n88 24 20 4 23");
