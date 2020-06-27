// Given, an array A (index starting from 0) with N elements. You CAN remove only that element 
// which makes the sum of ALL the remaining elements exactly divisible by 7.

// Your task is to find the first array index of the smallest element that can be removed.

// Input Format

// The first line contains a single integer N.

// Next line contains N space separated integers A[k] , 0 < k < N - 0 based indexing

// Constraints

// 1 < N < 100000

// 0 < A[k] < 1000000000

// Output Format

// Print a single line containing one integer, the first array index of the smallest element
//  that CAN be removed, and -1 if there is no such element that he can remove!

// Sample Input 0

// 5
// 14 7 8 2 4
// Sample Output 0

// 1
// Explanation 0

// Both 14 and 7 are valid answers, but since 7 is the smallest, the required array index is 1.

function processData(input) {
  //Enter your code here

  input = input.split("\n");
  // console.log("input", input);

  var numberOfElements = Number(input[0]);
  // console.log("numberOfElements", numberOfElements);

  var givenArray = input[1].split(" ").map(Number);
  // console.log("givenArray", givenArray);

  var minimum = -1;

  for (var i = 0; i < numberOfElements; i++) {
    var sum = 0;

    for (var j = 0; j < numberOfElements; j++) {
      if (i !== j) {
        sum = sum + givenArray[j];
      }
    }

    // console.log("sum", sum);

    if (sum % 7 === 0) {
      if (givenArray[minimum] === undefined) {
        minimum = i;
      } else if (givenArray[i] <= givenArray[minimum]) {
        minimum = i;
      }
    }
  }

  console.log(minimum);
}
