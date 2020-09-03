// Coding Club Fight
// Description

// Piyush went to fight for Coding Club. There were N soldiers with various powers. 
// There will be Q rounds to fight and in each round Piyush's power will be varied. With 
// power M, Piyush can kill all the soldiers whose power is less than or equal to M(<=M). 
// After each round, All the soldiers who are dead in previous round will reborn.Such that 
// in each round there will be N soldiers to fight. Count the number of soldiers that he can 
// kill in each round and total sum of their powers.

// Input
// Input Format

// First line contains N

// Next N line contains N integers which represents power of N soldiers

// Next line contains Q

// Next Q line contains Piyush's power for each of the Q rounds

// Constraints

// 1<=N<=10000

// 1<=power of each soldier<=100

// 1<=Q<=10000

// 1<=power of bishu<=100

// Output
// Output Format

// In each line, print the number of soldiers that he can kill in each round and total sum of their powers.

// Sample Input 1 

// 7
// 1 
// 2 
// 3 
// 4 
// 5 
// 6 
// 7
// 3
// 3
// 10
// 2
// Sample Output 1

// 3 6
// 7 28
// 2 3

// O(N)
function runProgram(input) {
  input = input.trim().split("\n");

  let N = Number(input[0]);
//   console.log("N", N);

  let line = 2;
  let soldiers = [];
  for (let i = 1; i <= N; i++) {
    soldiers.push(Number(input[i].trim()));
    line++;
  }

//   console.log("soldiers", soldiers);
//   console.log("line", line);

  let Q = Number(input[N + 1].trim());
//   console.log("Q", Q);

  let piyush = [];

  for (let i = 0; i < Q; i++) {
    piyush.push(Number(input[line++].trim()));
  }

//   console.log("piyush", piyush);

  for (let i = 0; i < piyush.length; i++) {
    let result = getCount(piyush[i], soldiers);
    console.log(...result);
  }
}

const getCount = (ele, arr) => {
  let count = 0,
    powers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= ele) {
      count++;
      powers.push(arr[i]);
    }
  }

  const totalPower = powers.reduce((acc, ele) => acc + ele, 0);

  return [count, totalPower];
};

runProgram("7\n1\n2\n3\n4\n5\n6\n7\n3\n3\n10\n2");
