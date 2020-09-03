// Upper Bound in LogN
// Description

// You are given n different numbers and an integer k. Write a program that finds
// upper bound of k in log(n) time complexity. Upper bound of a number k in a sorted
// list is the index of the first number which is greater than k (here the answer is
//   given considering index to be starting from 0)

// -> Test cases are such that there is always one number greater than k

// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION

// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION

// USING BRUTE FORCE/LINEAR SEARCH, IN THIS CASE, WOULD LEAD TO DISQUALIFICATION

// Input
// Input Format

// First line contains N and K

// Second line contains N space separated sorted integers

// Constraints

// N<100

// Output
// Output upper bound

// Sample Input 1

// 10 3
// 0 2 4 4 5 5 7 7 9 10
// Sample Output 1

// 2
// Sample Input 2

// 10 4
// 0 2 4 4 5 5 7 7 9 10
// Sample Output 2

// 4

function runProgram(input) {
  input = input.split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);

  //   console.log("n, k", n, k);

  let arr = input[1].trim().split(" ").map(Number);
  //   console.log("arr", arr);
  let start = 0,
    end = n - 1,
    output = 0;

  const result = getUpperBound(arr, start, end, k, output);
  console.log(result);
}

const getUpperBound = (arr, start, end, k, output) => {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);
    if (arr[mid] <= k) {
      start = mid + 1;
    } else if (arr[mid] > k) {
      output = mid;
      end = mid - 1;
    }
  }
  return output;
};

runProgram("10 3\n0 2 4 4 5 5 7 7 9 10");
