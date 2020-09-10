// Angry Employees
// Description

// United Share Corp. has N seats for its employees. All the N seats  are located in
// a straight line at position  x1,x2,..xN

// The company has only C employees and they don't like each other. To prevent the
// employees from arguing each other, United Share Corp. wants to assign the employees
// to the seats, such that the minimum distance between any two of them is as large as possible.

// Your task is to write a program that calculates the largest minimum distance?

// Input
// Input Format

// t– the number of test cases, then t-test cases follows.

// For each test case:

// Line 1: Two space-separated integers : N and C

// Next  N  lines contain seat location,xi

// Constraints

// 2 <= N<= 100,000

// 0 <=xi<= 10000000

// 2 <=C<= N

// Output
// For each test case output one integer: the largest minimum distance.

// Sample Input 1

// 1
// 5 3
// 1
// 2
// 8
// 4
// 9
// Sample Output 1

// 3
// Hint

// Sample 1 Explanation

// The Company can put his 3 employees in the seats at positions 1, 4 and 8, resulting
// in a minimum distance of 3.
// O(NLOGN)
function runProgram(input) {
  input = input.trim().split("\n");

  let tcs = Number(input[0]);

  let line = 1;

  for (let i = 0; i < tcs; i++) {
    var [n, k] = input[line++].trim().split(" ").map(Number);
    // console.log("n, k", n, k);
    var arr = [];

    for (let j = line; j < line + n; j++) {
      arr.push(Number(input[j].trim()));
    }
    line += n;

    arr.sort((a, b) => a - b);
    // console.log("arr", arr);

    let lo = Number.MAX_SAFE_INTEGER;
    // console.log("lo", lo);

    for (let l = 1; l < n; l++) {
      lo = Math.min(lo, arr[l] - arr[l - 1]);
    }
    // console.log(lo);

    let hi = arr[n - 1] - arr[0];
    // console.log("hi", hi);

    const result = BS(lo, hi, 0);
    console.log(result);
  }

  function BS(lo, hi) {
    while (lo < hi) {
      let mid = Math.ceil((lo + hi) / 2);

      if (check(mid)) {
        lo = mid;
      } else {
        hi = mid - 1;
      }
    }
    return lo;
  }

  function check(mid) {
    let lastPos = arr[0];
    let placedSoFar = 1;

    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - lastPos >= mid) {
        placedSoFar++;
        lastPos = arr[i];

        if (placedSoFar === k) {
          return true;
        }
      }
    }
    return false;
  }
}

// runProgram("1\n5 3\n1\n2\n8\n4\n9");
// runProgram("1\n5 2\n0\n22\n2\n32\n1000000000");
// runProgram("2\n5 3\n1\n2\n8\n4\n9\n5 2\n1\n2\n8\n4\n14")
runProgram("1\n5 3\n1\n2\n8\n4\n9\n5 2\n1\n2\n8\n4\n14");
