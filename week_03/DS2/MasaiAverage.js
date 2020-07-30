// Given an array, A, of N integers, print the ceil of average of numbers present in given array

// Input Format

// The first line contains an integer, N (the number of integers in A). The second line contains N space separated integers describing A.

// Constraints

// N<100

// Output Format

// Print an integer which is ceil of average of integers present in array

// Sample Input 0

// 3
// 1 2 3
// Sample Output 0

// 2

function processData(input) {
  var sum = 0,
    average = 0;
  //Enter your code here
  // console.log(input);

  string1 = input.split("\n");
  // console.log('string1', string1);

  numberOfIntegers = Number(string1[0]);
  // console.log('numberOfIntegers', numberOfIntegers);
  // console.log('typeof numberOfIntegers', typeof numberOfIntegers)

  integersInString = string1[1];
  // console.log('integersInString', integersInString);

  integers = integersInString.split(" ");
  // console.log('integers', integers);

  for (var i = 0; i < numberOfIntegers; i++) {
    sum += Number(integers[i]);
  }

  // console.log('sum', sum);
  // console.log('typeof sum', typeof sum);
  average = sum / numberOfIntegers;
  console.log(Math.ceil(average));
}
