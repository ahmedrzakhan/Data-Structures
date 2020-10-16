// Transformation Possibility?
// Description

// There are two arrays A and B of length n.

// Array A consists of elements which have only elements from {-1,0,1}.

// You can perform the below operation any number of times.

// Choose any pair of indexes i and j any number of times such that i < j and add Ai 
// to Aj. (Aj = Aj + Ai).

// Can you transform the array A into B by using some number of the above operation? 
// Print "YES" if possible else "NO".

// Sample Transformation -

// A : [-1,1,0] can be transformed into [-1,1,1], [-1,0,0] and [-1,1,-1] in one operation.

// Input
// The first line of the input contains one integer t (1 ≤ t ≤ 10) — the number of test cases.
//  Then t test cases follow.

// The first line of each test case contains a single integer n (1 ≤ n ≤ 100000) — The size
//  of the arrays.

// The second line of each test case contains n integers (-1 ≤ Ai ≤ 1). Elements of array A.

// The third line of each test case contains n integers (-10^5 ≤ Bi ≤ 10^5). Elements of array B.


// Output
// For each test case, print the answer: YES or NO for the transformation.


// Sample Input 1 

// 5
// 3
// 1 -1 0
// 1 1 -2
// 3
// 0 1 1
// 0 2 2
// 2
// 1 0
// 1 41
// 2
// -1 0
// -1 -41
// 5
// 0 1 -1 1 -1
// 1 1 -1 1 -1
// Sample Output 1

// YES
// NO
// YES
// YES
// NO

// TC_O(N) SC_O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i++]);
    // console.log("n", n);
    let a = input[i++].trim().split(" ").map(Number);
    // console.log("a", a);
    let b = input[i].trim().split(" ").map(Number);
    // console.log("b", b);
    const result = check(a, b, n);
    console.log(result);
  }
}

const check = (a, b, n) => {
  let one = new Array(n).fill(0);

  let firstOne = a.indexOf(1);
  if (firstOne !== -1) {
    one = one.map((ele, index) => {
      if (index >= firstOne) return ele + 1;
      else return 0;
    });
  }
  // console.log("one", one);

  let firstMinusOne = a.indexOf(-1);

  let minusOne = new Array(n).fill(0);

  if (firstMinusOne !== -1) {
    minusOne = minusOne.map((ele, index) => {
      if (index >= firstMinusOne) return ele + 1;
      else return 0;
    });
  }
  // console.log("minusOne", minusOne);
  // console.log("a", a);
  // console.log("b", b);

  for (let i = n - 1; i >= 0; i--) {
    if (a[i] < b[i]) {
      if (one[i - 1] !== 1) {
        return "NO";
      }
    } else if (a[i] > b[i]) {
      if (minusOne[i - 1] !== 1) {
        return "NO";
      }
    }
  }

  return "YES";
};

runProgram(
  "5\n3\n1 -1 0\n1 1 -2\n3\n0 1 1\n0 2 2\n2\n1 0\n1 41\n2\n-1 0\n-1 -41\n5\n0 1 -1 1 -1\n1 1 -1 1 -1"
);
// runProgram("1\n3\n0 1 1\n0 2 2");
