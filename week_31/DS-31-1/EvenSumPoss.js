// Is Even Sum Possible?
// Description

// Given an array a which contains n integers in it. Find out if there exists a
//  subset of the array such that the sum of its elements is even.

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number
//  of test cases. Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) 
// — the length of the array a.

// The second line contains n integers a1,a2,…,an (1 ≤ ai ≤ 10000), elements of the array a.

// Output
// For each test case, print the answer: "Yes" if possible or else "No" if not possible
//  (without quotes).

// Sample Input 1 

// 2
// 1
// 5
// 4
// 1 2 3 4
// Sample Output 1

// No
// Yes

// TC_O(N) SC_O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i++]);
    // console.log("n", n);

    let arr = input[i].trim().split(" ").map(Number);
    // console.log("arr", arr);

    const result = check(arr, n);
    console.log(result);
  }
}

const check = (a, n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + a[i];

    if (sum % 2 === 0 || a[i] % 2 === 0) {
      return "Yes";
    }
  }

  return "No";
};

runProgram("2\n1\n5\n3\n1 3 3");
