// You are given three integers: n ,k , y

// You have to print sum of first k multiples of n which are multiple of y as well.

// Input Format

// The input line contains 3 spaced integers which are n k and y.

// Constraints

// 1 <= n <= 1000

// 1 <= y <= 1000

// 1<= k <= 10^4

// Output Format

// Output the number which is sum of multiples of given integers.

// Sample Input 0

// 3 10 5
// Sample Output 0

// 45
// Explanation 0

// For the sample input first k(10) multiples of n(3) are
// 3 6 9 12 15 18 21 24 27 30 Sum of those which are multiple of y (5) is = 15 +30 = 45

function processData(input) {
  //Enter your code here

  var [n, k, y] = input.split(" ").map(Number);
  // console.log("n k y", input);

  var firstArray = [];

  for (var i = 1; i <= k; i++) {
    var val1 = n * i;
    firstArray.push(val1);
  }

  // console.log("firstArray", firstArray);

  var secondArray = firstArray.filter(function (element) {
    return element % y === 0;
  });

  // console.log("secondArray", secondArray);

  if (secondArray[0] === undefined) {
    secondArray.push(0);
  }

  var sum = secondArray.reduce(function (acc, element) {
    return acc + element;
  });

  console.log(sum);
}
