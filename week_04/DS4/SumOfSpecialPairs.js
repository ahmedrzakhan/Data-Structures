// You are given an array A of N integers. Write a program to find the sum of absolute
//  difference between all such pairs (A[i], A[j]) such that i < j and ( j-i ) is prime.

// Input Format

// First line contains N

// Second line contains N space separated integers which are elements of A

// Constraints

// N<1000

// Output Format

// Output one number as per condition mentioned above

// Sample Input 0

// 6
// 1 2 3 5 7 12
// Sample Output 0

// 45
// Explanation 0

// All valid index pairs are:
// (5, 0) -> abs(12 – 1) = 11
// (3, 0) -> abs(5 – 1) = 4
// (2, 0) -> abs(3 – 1) = 2
// (4, 1) -> abs(7 – 2) = 5
// (3, 1) -> abs(5 – 2) = 3
// (5, 2) -> abs(12 – 3) = 9
// (4, 2) -> abs(7 – 3) = 4
// (5, 3) -> abs(12 – 5) = 7
// 11 + 4 + 2 + 5 + 3 + 9 + 4 + 7 = 45

function processData(input) {
  sum = 0;
  isPrime = true;
  //Enter your code here
  //     console.log('input', input);
  //     console.log('typeof input', typeof input);

  array1 = input.split("\n");
  //     console.log('array1', array1);
  //     console.log('typeof array1', typeof array1);

  totalElements = Number(array1[0]);
  //     console.log('totalElements', totalElements);
  //     console.log('typeof totalElements', typeof totalElements);

  individualElements = array1[1].split(" ").map(Number);
  //     console.log('individualElements', individualElements);
  //     console.log('typeof individualElements', typeof individualElements);
  //     console.log('individualElements[0]', individualElements[0]);

  lengthOfIndividualElements = individualElements.length;
  // console.log('lengthOfIndividualElements', lengthOfIndividualElements);

  for (var i = 0; i < lengthOfIndividualElements; i++) {
    for (var j = i + 1; j < lengthOfIndividualElements; j++) {
      if (j > i) {
        Prime = checkIfPrime(j, i);

        if (Prime) {
          // console.log( j, i );
          sum = sum + Math.abs(individualElements[j] - individualElements[i]);
        }
      }
    }
  }
  console.log(sum);
}

checkIfPrime = function (j, i) {
  isPrime = true;
  for (var index = 2; index <= Math.sqrt(j - i); index++) {
    if ((j - i) % index === 0) {
      isPrime = false;
      break;
    }
  }

  if (j - i === 1) {
    isPrime = false;
  }

  if (isPrime) {
    return (isPrime = true);
  } else {
    return (isPrime = false);
  }

  return isPrime;
};
