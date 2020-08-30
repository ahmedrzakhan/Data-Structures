// Steal as much as you can
// Description

// A thief is stealing from a jewellery store and wants to steal the greatest value 
// of gems possible. However, the getaway car he brought with him can only fit a maximum
//  weight ofC. All the gems in the store have a value and a weight associated with them
//   such that gem ihas a value v(i)and a weight w(i).

// Your task is to figure out the maximum valueVof gems he can steal given the weight limit 
// of the car. You can break a given gem into any fraction of itself.

// NOTE: Maximum value vshould be rounded to the nearest integer

// For example:

// Let Total Weight C = 50

// Number of gems = 3

// The Value of gems: 60 100 120

// The Weight of gems: 10 20 30

// The total value of the gems he can carry is = 240

// The fraction of each item taken is: 1 1 0.66666666666

// Total weight is : 1*10 + 1*20 + 0.66666666666*30 = 49.999999999799996


// Input
// Input Format

// First line contains an integer denoting the capacity C
// Second line contains the total number of gems n
// Third line contains the value of each gem separated by a space
// Fourth line contains the weight of each gem separated by a space
// Constraints
// 0 <= C
// 0 < n <= 1000000
// 0 <= v(i)
// 0 <= w(i)

// Output
// For each test case output a single integer: the maximum value rounded to the nearest integer

// Sample Input 1 

// 50 
// 3
// 60 100 120 
// 10 20 30
// Sample Output 1

// 240

function runProgram(input) {
  input = input.trim().split("\n");

  let C = Number(input[0]),
    n = Number(input[1]);

  // console.log("C, n", C, n);

  let values = input[2].trim().split(" ").map(Number),
    weights = input[3].trim().split(" ").map(Number);

  // console.log("values, weights", values, weights);

  let arr = [];

  for (let i = 0; i < n; i++) {
    arr.push([values[i] / weights[i], values[i], weights[i]]);
  }

  // console.log("arr", arr);

  arr.sort((a, b) => b[0] - a[0]);
  // console.log("arr", arr);

  let currWt = 0,
    currValue = 0;
  let i = 0,
    result = 0;

  while (currWt < C && i < n) {
    currValue = currValue + arr[i][1];
    currWt = currWt + arr[i][2];

    if (currWt >= C) {
      let fraction = Math.round(((currWt - C) * arr[i][1]) / arr[i][2]);
      result = currValue - fraction;
    }
    i++;
  }
  console.log(result)
}

runProgram("50\n3\n60 100 120 \n10 20 30");
