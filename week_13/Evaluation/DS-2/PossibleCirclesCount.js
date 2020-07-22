// Nick and Navi are studying together for their maths exam. Navi is disturbing Nick so
// much So Nick decided to give him a question. There is a rectangle of length l and width
// w.Navi has to determine the maximum number of big circles that can fit inside the given
// rectangle. The big circle is the circle that contains maximum circumference that fits
// inside the rectangle.

// Input Format

// First line: An integer t denoting the number of test cases

// First line of each test case: Integers l and m

// Constraints

// 1 <= t <= 1000

// 1 <= l,m <= 10^9

// Output Format

// For each test case, print the answer on a new line denoting the maximum number of big circles
// that can fit in the provided rectangle.

// Sample Input 0

// 1
// 40 10
// Sample Output 0

// 4
// Explanation 0

// 4 circles of each having diameter 10 can be fit in the given rectangle

function processData(input) {
  //Enter your code here
  input = input.split("\n");

  let tcs = Number(input[0]);
  let arr;

  for (var i = 1; i <= tcs; i++) {
    arr = input[i].split(" ").map(Number);

    let length = Math.max(...arr);
    // console.log("length", length);

    let diameter = Math.min(...arr);
    // console.log("diameter", diameter);

    let result = Math.floor(length / diameter);
    console.log(result);
  }
}
