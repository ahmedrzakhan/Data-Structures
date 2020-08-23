
// Manage Bricks
// Description

// You have N bricks, where each brick has some width Wi. You want to arrange them in a
//  pyramidical way with two simple conditions in mind.

// The first being that the total width of the ith row should be less than (i+1)th row.

// The second being that the total number of bricks in the ith row should be less than (i+1)th row.

// What is the maximum height which is possible to be attained!

// Note: It is NOT necessary to use all the bricks.


// Input
// Input Format

// The first line contains an integer N, which denotes the number of bricks.

// The next line contains N integers each denoting the width of every single brick.

// Constraints
// 1 ≤ N ≤ 1000000
// 1 ≤ Wi ≤ 1000000000

// Output
// Print the maximum height of the pyramid.

// Sample Input 1 
// 4
// 40 100 20 30
// Sample Output 1
// 2
// Hint
// Sample 1 Explanation

// On the lowest level, we can place 20 and 100, and on top of it, we can place 40, so 
// the maximum height would be 2.

function runProgram(input) {
  input = input.split("\n");

  let sorted = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

  let height = 1;

  let brickSize = sorted[0],
    prevBrick = 1;

  let bricks = 0,
    curBrick = 0;

  for (let i = 1; i < sorted.length; i++) {
    curBrick = curBrick +  sorted[i];
    bricks++;

    if (curBrick > brickSize && bricks > prevBrick) {
      height++;
      brickSize = curBrick;
      prevBrick = bricks;
      bricks = 0;
      curBrick = 0;
    }
  }

  console.log(height);
}

runProgram("4\n40 100 20 30");
