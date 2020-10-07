// Catch that number
// Description

// You are given an infinite matrix whose upper-left square starts with 1. 
// Here are the first five rows of the infinite matrix :

// Your task is to find out the number in presents at row x and column y after
//  observing a certain kind of patter present in the matrix

// Input
// Input Format

// The first input line contains an integer t: the number of test cases

// After this, there are t lines, each containing integer x and y

// Constraints

// 1 <= t <= 10^5

// 1 <= x,y <= 10^9

// Output
// For each test, print the number presents at xth row and yth column.


// Sample Input 1 

// 3
// 2 3
// 1 1
// 4 2
// Sample Output 1

// 8
// 1
// 15

function runProgram(input) {
  input = input.trim().split("\n");

  let tcs = Number(input[0]);
  //   console.log("tcs", tcs);

  for (let i = 1; i <= tcs; i++) {
    let indexes = input[i].trim().split(" ").map(Number);
    let pos = getPos(indexes[0], indexes[1]);
    console.log(pos);
  }
}

const getPos = (i, j) => {
  let val;
  if (i > j) {
    //row
    if (i % 2 === 0) {
      val = Math.pow(i, 2) - j + 1;
    } else {
      i--;
      val = Math.pow(i, 2) + j;
    }
  } else {
    if (j % 2 === 1) {
      val = Math.pow(j, 2) - i + 1;
    } else {
      j--;
      val = Math.pow(j, 2) + i;
    }
  }

  return val;
};

runProgram("3\n2 3\n1 1\n4 2");
