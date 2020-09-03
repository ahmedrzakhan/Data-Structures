// Number of Occurences in logn
// Description

// You are given n different numbers and an integer k. Write a program that finds
//  number of times k is present in log(n) time complexity.

// NOTE: YOU MUST NOT USE BRUTE FORCE SOLUTION

// WE KNOW THAT YOU KNOW BRUTE FORCE SOLUTION AND WANT YOU TRY THE LOGN SOLUTION

// USING BRUTE FORCE/LINEAR SEARCH IN THIS CASE WOULD LEAD TO DISQUALIFICATION

// Input
// Input Format :

// First line contains N and K

// Second line contains N space separated sorted integers

// Constraints :

// N<100

// Output
// Print number of times that number is present in the given list

// Sample Input 1

// 6 3
// 2 3 3 3 6 9
// Sample Output 1

// 3

function runProgram(input) {
  input = input.split("\n");

  let [n, k] = input[0].split(" ").map(Number);
  // console.log("n, k", n, k);

  let arr = input[1].split(" ").map(Number);
  // console.log("arr", arr);

  let start = 0,
    end = n - 1;

  let first = 0,
    last = 0;
  const i = getLowerBound(arr, start, end, k, first);
  // console.log(i);

  const j = getUpperBound(arr, start, end, k, last);
  // console.log(j);

  if (i === 0 && j === 0) {
    console.log(i);
    return;
  }

  const result = i - j + 1;
  console.log(result);
}

const getUpperBound = (arr, start, end, k, last) => {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === k) {
      last = mid;
      end = mid - 1;
    } else if (arr[mid] < k) {
      start = mid + 1;
    } else if (arr[mid] > k) {
      end = mid - 1;
    }
  }

  return last;
};

const getLowerBound = (arr, start, end, k, first) => {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === k) {
      first = mid;
      start = mid + 1;
    } else if (arr[mid] < k) {
      start = mid + 1;
    } else if (arr[mid] > k) {
      end = mid - 1;
    }
  }

  return first;
};

runProgram("6 10\n2 2 2 3 3 9");
