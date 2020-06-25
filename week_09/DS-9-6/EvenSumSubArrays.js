// You are given an array A of N elements. Write a program that counts the number
// of sub-arrays of A in which sum of all the elements is an even number.

// Please read sample test case and its explanation for better understanding.

// Input Format

// First line contains N which is the number of elements present in the array.

// Second line contains N space separated integers which are the elements of array A

// Constraints

// 1 ≤ N ≤ 100000

// 1 ≤ Elements of array ≤ 1000000

// Output Format

// Output one number which is the count of such sub-arrays

// Sample Input 0

// 5
// 2 5 4 4 4
// Sample Output 0

// 7
// Explanation 0

// All the even sum subarrays are:
// 1) [1,1] (i.e from index 1 to index 1)
// 2) [3,5] (i.e from index 3 to index 5)
// 3) [3,4] (i.e from index 3 to index 4)
// 4) [4,5] (i.e from index 4 to index 5)
// 5) [3,3] (i.e from index 3 to index 3)
// 6) [4,4] (i.e from index 4 to index 4)
// 7) [5,5] (i.e from index 5 to index 5)

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  var numberOfElements = Number(input[0]);
  var givenArray = input[1].split(" ").map(Number);
  // console.log("numberOfElements, givenArray", numberOfElements, givenArray);

  var cumulativeSum = 0,
    countOfOdd = 0,
    countOfEven = 1;

  for (var i = 0; i < numberOfElements; i++) {
    cumulativeSum = cumulativeSum + givenArray[i];

    if (cumulativeSum % 2 === 0) {
      countOfEven = countOfEven + 1;
    } else {
      countOfOdd = countOfOdd + 1;
    }
  }

  // console.log("countOfEven, countOfOdd", countOfEven, countOfOdd);

  var totalEvenSumSubArrays =
    (countOfEven * (countOfEven - 1)) / 2 + (countOfOdd * (countOfOdd - 1)) / 2;

  console.log(totalEvenSumSubArrays);
}
