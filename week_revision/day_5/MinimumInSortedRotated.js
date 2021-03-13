// Minimum in sorted & rotated array
// Description

// Given an array of length n , and it is sorted and rotated at some unknown point,
//  find the minimum element in it.

// Input
// Input Format

// First line Consists of integer n.

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^6

// Output
// Print minimum element.


// Sample Input 1 

// 10
// 4 6 7 9 10 -1 0 1 2 3
// Sample Output 1

// -1


// TC - O(LogN) SC - O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
//   console.log("n", n);

  let a = input[1].trim().split(" ").map(Number);
//   console.log("a", a);

  let lo = 0,
    hi = n - 1,
    k = a[0];

  const BS = (lo, hi) => {

    while (lo <= hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (a[mid] >= k) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
    return a[lo] || a[hi];
  };

  const result = BS(lo, hi);
  console.log(result);
}

runProgram("10\n1 1 1 1 1 1 1 1 1 1");
