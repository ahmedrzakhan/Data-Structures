// Sandhya is running up a staircase with N steps, and can hop(jump) either 1 step, 2
//  steps or 3 steps at a time. You have to count, how many possible ways Sandhya can
//   run up to the stairs.
// Input Format

// Input contains integer N that is number of steps
// Constraints

// N <= 30
// Output Format

//  Output for each integer N the no of possible ways w.
// Sample Input 0

// 4
// Sample Output 0

// 7

function processData(input) {
  //Enter your code here

  let n = Number(input);
  // console.log("n", n);

  let result = numOfWays(n);
  console.log(result);
}

const numOfWays = (n) => {
  if (n <= 2) {
    return n;
  } else if (n === 3) {
    return 4;
  } else {
    return numOfWays(n - 1) + numOfWays(n - 2) + numOfWays(n - 3);
  }
};

processData("2");