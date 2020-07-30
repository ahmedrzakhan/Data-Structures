// You are given an array of N-1 integers and integers are in the range of
// 1 to N. There are no duplicates in the array. One of the integers is missing
// in the array. Find the missing integer

// Input Format

// The first and only line contains N-1 integers

// Constraints

// N<100

// Output Format

// Print the one number belonging from 1 to N which is not present in the array

// Sample Input 0

// 4 5 1 3
// Sample Output 0

// 2

function processData(input) {
  //Enter your code here

  input = input.split(" ").map(Number);
  // console.log("input", input);

  var smallest = Number.MAX_SAFE_INTEGER,
    largest = Number.MIN_SAFE_INTEGER;
  // console.log( smallest, largest )

  for (var i = 0; i < input.length; i++) {
    if (smallest > input[i]) {
      smallest = input[i];
    }

    if (largest < input[i]) {
      largest = input[i];
    }
  }

  // console.log(smallest, largest)

  var sortedNumbers = [];

  sortedNumbers = input.sort(function (a, b) {
    return a - b;
  });

  // console.log("sortedNumbers", sortedNumbers)

  var genArray = [];

  for (var j = smallest; j <= largest; j++) {
    genArray.push(j);
  }

  // console.log("genArray", genArray);

  for (k = 0; k < input.length; k++) {
    if (sortedNumbers[k] === genArray[k]) {
      // console.log("k", k)
      continue;
    } else {
      console.log(k + 1);
      break;
    }
  }
}
