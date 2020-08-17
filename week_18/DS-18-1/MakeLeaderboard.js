// Make Leaderboard
// Description

// You are given name and marks of N different students in a hackerrank contest.
// Your task is to write a program that makes leaderboard of the students under
// following conditions:

// - If two students get same marks they get same rank

// - The student placed next to the same marks students will get the rank skipping
// the intermediate ranks.

// Refer to the sample test case for better understanding

// Note : You cannot use built-in sort function. Using that can lead to disqualification.
// Write your own sorting algorithm

// Input
// Input Format :
// First line of input contains N

// Next N line contains name and marks respectively of N different students (where name
//      and marks is separated by a space)
// Constraints :

// N < 100

// Output
// Output N names with their rank. Follow these rules for generating the list:

// 1. The students having more mark gets better rank

// 2. If students have similar mark, their rank will be same(In case of similar marks,
//      the person whose name comes first in alphabetical order comes first in order.
//      However their rank will be same)


function runProgram(input) {
  input = input.trim().split("\n");

  input.shift();
//   console.log(input);

  input = input.map((a) => a.split(" ")).sort(customSort);
//   console.log(input);

  let rank = 1;
  input.forEach((a, i) => {
    if (i === 0) {
      console.log(`${rank} ${a[0]}`);
    } else if (a[1] === input[i - 1][1]) {
      console.log(`${rank} ${a[0]}`);
    } else {
      rank = i + 1;
      console.log(`${rank} ${a[0]}`);
    }
  });
}

const customSort = (a, b) => {
  a[1] = Number(a[1]);
  b[1] = Number(b[1]);

  if (b[1] > a[1]) {
    return 1;
  } else if (b[1] < a[1]) {
    return -1;
  } else if (b[1] === a[1]) {
    if (b[0] < a[0]) {
      return 1;
    } else {
      return -1;
    }
  }
};

runProgram("6\nrancho 45\nchatur 32\nraju 30\nfarhan 28\nvirus 32\njoy 45");
