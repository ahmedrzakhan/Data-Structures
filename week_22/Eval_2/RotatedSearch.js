// Search in sorted and rotated array
// Description

// Given a sorted(increasing order) array of length n and is rotated by some
// value beforehand. Find the index of the target element  K in the rotated array
// in O(logn) time. If not found print -1.

// Note: Array contains all distinct elements.

// You must do it in O(log N) time complexity. Exceeding the time complexity will make
// your score to 0 even if it gets accepted

// Input
// Input Format

// First line consists of n and k separated by space.

// Second line consists of n integers separated by spaces

// Constraints

// 1 <= n <= 50

// k <= 50

// Output
// Print index of the target element

// Sample Input 1

// 5 1
// 3 4 5 1 2
// Sample Output 1

// 3
// Sample Input 2

// 6 6
// 3 4 7 9 1 2
// Sample Output 2

// -1

function runProgram(input) {
  input = input.trim().split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
  //   console.log("n, k", n, k);

  let arr = input[1].trim().split(" ").map(Number);
  //   console.log("arr", arr);

  let lo = 0,
    hi = n - 1;

  const result = BS(arr, lo, hi, k);
  console.log(result);
}

const BS = (a, lo, hi, k) => {
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    // console.log(lo, mid, hi);

    if (a[mid] === k) {
      return mid;
    }
    if (a[lo] <= a[mid] && a[mid] <= a[hi]) {
      if (k <= a[mid]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else if (a[lo] <= a[mid] && a[mid] >= a[hi]) {
      if (k >= a[lo] && k <= a[mid]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    } else if (a[lo] >= a[mid] && a[mid] <= a[hi]) {
      if (k >= a[mid] && k <= a[hi]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }
  return -1;
};

// runProgram("5 1\n3 4 5 1 2")

// runProgram("6 6\n3 4 7 9 1 2");

runProgram("6 4\n7 5 1 2 3 4");
