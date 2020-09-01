// Addition, Subtraction and its Cost
// Description

// You have an array consisting of N integers .You are allowed to perform 2 kinds of operation
//  on this array.

// Type 1 : Increment any integer of the array by 1.

// Type 2 : Decrement any integer of the array by 1.

// You can perform these operation as many times as you want on this array.

// Each operation of Type 1 costs 3 while each operation of Type 2 costs 5.

// You want to have K equal elements in this array. What is the minimum cost required in obtaining
//  K equal elements in this array?


// Input
// Input Format:

// The first line contains T indicating test cases.

// Second line contains 2 integers N indicating the number of elements in the array and K.

// Third line contains N space separated integers denoting array.

// Constraints:

// 1 ≤ T ≤ 100

// 1 ≤ K ≤ N ≤100

// 1 ≤ A[i] ≤100


// Output
// The minimum cost required to get K equal elements.


// Sample Input 1 

// 1
// 5 3
// 9 4 9 7 4
// Sample Output 1

// 6

function runProgram(input) {
  input = input.split("\n");

  for (let i = 1; i < input.length; i++) {
    let [n, K] = input[i++].split(" ").map(Number);
    // console.log("n, K", n, K);
    let arr = input[i].split(" ").map(Number);
    // console.log("arr", arr);

    const result = getCost(arr, n, K);
    console.log(result);
  }
}

const getCost = (arr, n, K) => {
  let inc = 3,
    dec = 5;

  let sumArr = [];

  for (let i = 0; i < n; i++) {
    let costArr = [];

    for (let j = 0; j < n; j++) {
      if (arr[i] <= arr[j]) {
        costArr.push((arr[j] - arr[i]) * dec);
      } else {
        costArr.push((arr[i] - arr[j]) * inc);
      }
    }
    // console.log("costArr", costArr)
    costArr.sort((a, b) => a - b);

    let sum = 0;

    for (let i = 0; i < K; i++) {
      sum += costArr[i];
    }

    sumArr.push(sum);
  }

  // console.log("sumArr", sumArr);

  return Math.min(...sumArr);
};

runProgram("1\n5 3\n1 2 3 100 100");
