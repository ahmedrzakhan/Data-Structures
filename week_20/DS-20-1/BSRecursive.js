// Binary Search - Recursive
// Description

// Given n distinct numbers, implement iterative binary search to check the presence
//  of target number k.

// In case k is present among those n numbers, print 1

// Else print -1

// Input
// Input Format :

// First line of input contains n and k separated by a space

// Next line contains n space separated integers

// Constraints :

// n<1000

// Output
// In case k is present among those n numbers, print 1

// Else print -1

// Sample Input 1

// 5 0
// 2 -2 0 3 4
// Sample Output 1

// 1

function runProgram(input) {
  input = input.split("\n");

  let [n, target] = input[0].split(" ").map(Number);
  //   console.log("n, target", n, target);

  let arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  //   console.log("arr", arr);

  let start = 0,
    end = n - 1;

  const result = checkPresence(arr, start, end, target);
  console.log(result);
}

const checkPresence = (arr, start, end, target) => {
  while (start <= end) {
    let mid = Math.floor((start + end) / 2);

    if (arr[mid] === target) {
      return 1;
    } else if (arr[mid] < target) {
      return checkPresence(arr, mid + 1, end, target);
    } else if (arr[mid] > target) {
      return checkPresence(arr, start, mid - 1, target);
    }
  }
  return -1;
};

runProgram("5 4\n2 -2 0 3 4");
