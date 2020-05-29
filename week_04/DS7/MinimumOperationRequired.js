// You are given an array of n integers. You have to equalize all elements of
// the array in minimum possible operation.

// In ONE operation, you can increase any of the n-1 elements of the array by 1.
// That is, except for one element of the array, you can increment all other integers by 1.

// Output the minimum number of operations required to equalize all elements of array.

// Input Format

// First line contains n

// Second line contains n space separated integers which are elements of array

// Constraints

// n<1000

// Output Format

// Output one number, which is the minimum number of operations required to perform in
// order to make all the elements of array equal

// Sample Input 0

// 3
// 1 2 3
// Sample Output 0

// 3
// Explanation 0

// In operation 1, you can increment 1st and 2nd element and array becomes [2,3,3]
// In operation 2, you can increment 1st and 3rd element and array becomes [3,3,4]
// In operation 3, you can increment 1st and 2nd element and array becomes [4,4,4]

// Therefore, at least 3 operations are required atleast

function processData(input) {
  //Enter your code here
  var smallest = 999999,
    countOfOperations = 0,
    sumOfArray = 0;

  input = input.split("\n");
  // console.log('input', input);

  var numberOfElements = Number(input[0]);
  // console.log('numberOfElements', numberOfElements);

  var elements = input[1].split(" ").map(Number);
  // console.log('elements', elements);

  for (var i = 0; i < numberOfElements; i++) {
    if (smallest > elements[i]) {
      smallest = elements[i];
    }

    sumOfArray = sumOfArray + elements[i];
  }

  countOfOperations = sumOfArray - numberOfElements * smallest;

  console.log(countOfOperations);
}
