// Boxes n Coins
// Description

// It's about boxes, greedy

// You have n coins, each of the same value of 1. Distribute them into boxes 
// such that any amount x (1≤x≤n) can be formed using some (possibly one or all) 
// number of these boxes.

// Each box may only be used entirely or not used at all. No box may be used more
//  than once in the formation of the single x, however it may be reused for the
//   formation of other x's.

// Find the minimum number of boxes in such a distribution.

// Input
// Input Format :

// The only line contains a single integer n (1≤n≤10^9) — the number of coins you have.

// Constraints :

// 1≤n≤10^9

// Output
// Output a single integer — the minimum possible number of boxes, satisfying the condition above.

// Sample Input 1 

// 6
// Sample Output 1

// 3

function runProgram(input) {
  let n = Number(input.trim());

  let result = Math.floor(Math.log2(n)) + 1;
  console.log(result);
}

runProgram("6");
