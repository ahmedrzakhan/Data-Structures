// You are given an array having N integer values. You are also provided an integer K.
// You can update every element of the array by incrementing it by 1 in 1 second.
// Your task is to write a program that calculates the minimum time required (in seconds)
//  to make every element of the array greater than or equal to K.

// Input Format

// First line of the input contains two integer N and K

// Second line contains N elements separated by space.

// Constraints

// N < 100000

// K < 100000

// Output Format

// Output one number, which is the minimum number of steps required to make every
// element of the array greater than or equal to K.

// Sample Input 0

// 3 4
// 1 2 5
// Sample Output 0

// 3
// Explanation 0

// After 1 second, array will be [2,3,6]
// After 2 second, array will be [3,4,7]
// After 3 second, array will be [4,5,8]

// So it will take 3 second for all array elements to become greater than or equal to 4.

function processData(input) {
  //Enter your code here
  var smallest = 9999;
  var count;
  input = input.split("\n");
  // console.log('input', input);

  var [numberOfElements, target] = input[0].split(" ").map(Number);
  // console.log('numberOfElemenets', numberOfElements);
  // console.log('target', target);

  givenArray = input[1].split(" ").map(Number);
  // console.log('givenArray', givenArray);

  for (var i = 0; i < numberOfElements; i++) {
    if (smallest > givenArray[i]) {
      smallest = givenArray[i];
    }
  }

  // console.log('smallest', smallest);

  if (smallest < target) {
    count = target - smallest;
  } else {
    count = 0;
  }

  console.log(count);
}
