
// At the annual meeting of Board of Directors of Acme Inc. If everyone attending 
// shakes hands exactly one time with every other attendee, how many handshakes are there?

// Example

// There are  attendees, ,  and .  shakes hands with  and , and  shakes hands with .
//  Now they have all shaken hands after  handshakes.

// Function Description

// Complete the handshakes function in the editor below.

// handshakes has the following parameter:

// int n: the number of attendees
// Returns

// int: the number of handshakes
// Input Format
// The first line contains the number of test cases .
// Each of the following  lines contains an integer, .

// Constraints



// Sample Input

// 2
// 1
// 2
// Sample Output

// 0
// 1
// Explanation

// Case 1 : The lonely board member shakes no hands, hence 0.
// Case 2 : There are 2 board members, so 1 handshake takes place.

function runProgram(input) {
  input = input.split("\n");

  let tcs = Number(input[0]);
//   console.log("tcs", tcs);

  for (let i = 1; i <= tcs; i++) {
    const val = Number(input[i]);
    const result = calculateHandshake(val);
    console.log(result);
  }
}

const calculateHandshake = (n) => {
  let output = (n * (n - 1)) / 2;

  return output;
};

runProgram("5\n1\n2\n3\n4\n5");
