// You are provided an integer N, print "Yes" (without quotes) if the given integer is prime, else print "No" (without quotes).

// Input Format

// First and the only integer contains N

// Constraints

// N<100000

// Output Format

// Output Yes or No depending on the conditions mentioned above.

// Please note that the case of each character matters.

// Sample Input 0

// 13
// Sample Output 0

// Yes
// Explanation 0

// Since 13 is a prime number, the output is Yes

function processData(input) {
  var count = 0;
  //Enter your code here
  // console.log('input', input)

  for (index = 1; index <= input; index++) {
    if (input % index === 0) {
      count += 1;
    }
  }

  if (count > 2) {
    console.log("No");
  } else {
    console.log("Yes");
  }
}

// 2nd Approach

function processData(input) {
  isPrime = true;
  //Enter your code here
  for (index = 2; index <= Math.sqrt(input); index++) {
    if (input % index === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log("Yes");
  } else {
    console.log("No");
  }
}
