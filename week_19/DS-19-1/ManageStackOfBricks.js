// Manage stacks of bricks
// Description

// You want all your bricks to be stacked. Currently, you have N stacks of bricks each
//  with height H1, H2, H3, ... HN(assuming all bricks are of 1 unit height).You did not 
//  like the configuration much and want to change the height of each stack. To increase 
//  the height of a particular stack you can add some bricks to it and to decrease the height
//   you can take out some bricks from that stack.

// You require X units of effort for putting up an item onto the stack and Y units of effort 
// for removing it. Find an integer which is the minimum effort required.

// NOTE: You just need to make stacks of a given height. Not necessarily each stack should be 
// made from its corresponding stack.


// Input
// Input Format:

// The First Line of input contains an integer t, which is the number of test cases. then, t 
// lines follow where first three lines of each test case contains three integers N, X and Y then 
// N lines follow containing two integers each a[i] and b[i] (Initial height of i-th stack and 
//   final height of i-th stack.)

// Constraints:

// t <= 100

// n <= 100000

// a[i], b[i] <= 1000000

// Output
// Output an integer which is the minimum effort required.

// Sample Input 1 

// 1
// 3
// 6
// 4
// 3 1
// 1 2
// 1 2
// Sample Output 1
// 10

function runProgram(input) {
  input = input.split("\n");

  let tcs = Number(input[0]);
  // console.log("tcs", tcs);

  let line = 1;

  for (let i = 0; i < tcs; i++) {
    let N = Number(input[line++]);
    let X = Number(input[line++]);
    let Y = Number(input[line++]);

    let mat = [];
    for (let j = 0; j < N; j++) {
      mat[j] = input[line++].split(" ").map(Number);
    }

    const result = calculateEffort(mat, N, X, Y);
    console.log(result);
  }
}

const getCols = (mat, i) => mat.map((arr) => arr[i]).sort((a, b) => a - b);

const calculateEffort = (mat, N, X, Y) => {
  let initial = getCols(mat, 0);
  // console.log("initial", initial);

  let final = getCols(mat, 1);
  // console.log("final", final);

  const diff = initial.map((ele, index) => ele - final[index]);
  // console.log("diff", diff);

  let effort = 0;

  for (let i = 0; i < N; i++) {
    if (diff[i] < 0) {
      effort += -diff[i] * X;
    } else {
      effort += diff[i] * Y;
    }
  }
  // console.log(effort);

  return effort;
};

runProgram("2\n3\n6\n4\n3 1\n1 2\n1 2\n3\n6\n4\n3 1\n1 2\n1 2");
