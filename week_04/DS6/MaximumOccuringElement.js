// Given an array A of N integers. Your task is to print that integer which is present
// maximum number of times in the given array.

// If there are two elements present maximum number of times, print the one which is comes
// first in the array.

// Input Format

// N<100

// Constraints

// The array contains integers only

// Output Format

// Print one integer, the one which is present the maximum number of times.

// Sample Input 0

// 5
// 0 2 0 6 9
// Sample Output 0

// 0
// Explanation 0

// Since 0 is present the maximum number of times (2 times) => The answer is 0

function processData(input) {
  var integerObject = {},
    max = 0;
  //Enter your code here

  // console.log('input', input);
  // console.log('typeof input', typeof input);

  input = input.split("\n");
  // console.log('input', input);

  numberOfIntegers = input[0];
  // console.log('numberOfIntegers', numberOfIntegers);

  values = input[1].split(" ").map(Number);
  // console.log('values', values);

  for (var index = 0; index < numberOfIntegers; index++) {
    // console.log('index', index);

    if (integerObject[values[index]]) {
      integerObject[values[index]]++;
    } else {
      integerObject[values[index]] = 1;
    }
  }

  // console.log('integerObject', integerObject);
  // console.log('integerObject.length', Object.values(integerObject).length);

  integerObjectEntries = Object.entries(integerObject);
  // console.log('integerObjectEntries', integerObjectEntries);
  // console.log('integerObjectEntries[1][0]', integerObjectEntries[1][0]);

  start = 1;
  stop = start + 1;
  for (var j = start; j < stop; j++) {
    // console.log('j', j);
    for (var i = 0; i < Object.values(integerObject).length; i++) {
      // console.log('i', i);
      if (max < integerObjectEntries[i][j]) {
        max = integerObjectEntries[i][j];
        element = integerObjectEntries[i][j - 1];
      }
    }
  }

  // console.log('max', max);
  console.log(element);
}
