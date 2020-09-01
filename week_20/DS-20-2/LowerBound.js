
// Lower bound in logn
// Description

// You are given n different numbers and an integer k. Write a program that finds 
// lower bound of k in log(n) time complexity. Lower bound of a number k in a sorted 
// list is the index of the first number which is same as k, in case the number is not 
// present, print -1 (here the answer is given considering index to be starting from 0)

// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION.

// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TO TRY THE LOGN SOLUTION.

// USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION.

// Input
// Input Format

// First line contains N and K

// Second line contains N space separated sorted integers

// Constraints

// N<100

// Output
// Output lower bound

// Sample Input 1 

// 5 2
// 1 1 2 2 5
// Sample Output 1

// 2
// Sample Input 2 

// 5 3
// 1 1 2 2 5
// Sample Output 2

// -1

// TC O(Log(N))
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
    end = n - 1,
    output = -1;

  const result = getLowerBound(arr, start, end, target, output);

  console.log(result);
}

const getLowerBound = (arr, start, end, target, output) => {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === target) {
      output = mid;
      end = mid - 1;
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
  }
  return output;
};

runProgram("5 -7\n1 2 2 2 5");
