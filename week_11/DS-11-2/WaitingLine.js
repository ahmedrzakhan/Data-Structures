// There is a long waiting line of integers waiting for their turn to buy ticket for
// a cricket match.

// There are N operations that can be performed on this line. The operations are of
// following type:

// E x : Integer x enters the queue (For such operation, print the new length of the queue.)

// D : The integer at front buys ticket and leaves the queue (For such operations, print the
//     element that left the queue and the new size of the queue separated by space. If there
//     is no element in the queue then print -1 in place of deleted element.)

// Input Format

// First line consists of a single integer denoting N

// Each of the following N lines contain one of the operation as described above.

// Constraints

// 1<=N<=100

// Output Format

// For each enqueue operation print the new size of the queue.

// And for each dequeue operation print two integers, deleted element (-1, if queue is empty)
// and the new size of the queue.

// Sample Input 0

// 5
// E 2
// D
// D
// E 3
// D
// Sample Output 0

// 1
// 2 0
// -1 0
// 1
// 3 0

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  // console.log("input", input);

  var queue = [];

  for (var i = 1; i < input.length; i++) {
    // console.log("input", input[i]);
    var currentArray = input[i].split(" ");

    if (currentArray[0] === "E") {
      queue.push(currentArray[1]);
      console.log(queue.length);
    } else if (currentArray[0] === "D") {
      if (queue.length === 0) {
        console.log(-1, queue.length);
      } else {
        console.log(queue.shift(), queue.length);
      }
    }
  }
}
