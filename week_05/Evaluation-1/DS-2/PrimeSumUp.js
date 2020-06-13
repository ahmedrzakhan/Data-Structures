// You are given a number N. Your task is to write a program that calculates
//  the sum of all prime numbers below N.(including N if N is a prime )

// Input Format

// First and only line contains N

// Constraints

// N<1000

// Output Format

// Print sum of all such numbers

// Sample Input 0

// 13
// Sample Output 0

// 41

function processData(input) {
  //Enter your code here

  var primeArray = [];

  for (var number = 2; number <= input; number++) {
    var isPrime = true;

    for (var i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        isPrime = false;
        break;
      }
    }

    if (isPrime) {
      // console.log(number);
      primeArray.push(number);
    }
  }

  // console.log("primeArray", primeArray);

  var sum = primeArray.reduce(function (acc, val) {
    return acc + val;
  }, 0);

  console.log(sum);
}
