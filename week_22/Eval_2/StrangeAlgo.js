// Strange Algorithm
// Description

// Sam is very creative and wants to make an algorithm of his own. The algorithm
//  works like this:

// If input n is divisible by two the algorithm divides it by two, else, the
// algorithm multiplies it by three and adds one and repeats this till n becomes 1.

// Now it is your turn to simulate the execution of the algorithm for a given value of n.

// Read the sample input for better understanding.

// Input
// Input Format

// The only input line contains an integer n

// Constraints

// 1 <= n <= 10^6

// Output
// Print a line that contains all values ofnduring the algorithm.

// Sample Input 1

// 3
// Sample Output 1

// 3 10 5 16 8 4 2 1
// Hint

// Sample Input 1 Explanation

// For example, the sequence for n = 3as follows:

// 3→10→5→16→8→4→2→1

function runProgram(input) {
  let n = Number(input.trim());
  //   console.log("n", n);

  let result = n;
  while (n > 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }

    result = result + " " + n;
  }
  console.log(result);
}

// 2nd Approach
function runProgram(input) {
  let n = Number(input.trim());
  // console.log("n", n);

  let result = n;

  while (n !== 1) {
    if (n % 2 === 0) {
      n = n / 2;
    } else {
      n = n * 3 + 1;
    }
    result = result + " " + n;
  }
  console.log(result);
}

runProgram("3");
