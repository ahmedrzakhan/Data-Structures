// List and Queue
// Description

// You need to implement a queue data structure with a list using plain list methods.
//  You can only use list.append() and list.pop() methods in this question.

// Note-You can't uselist.pop(index) too in this question.

// Input
// The first line contains the number of test cases (t).

// Next t lines contains commands for the queue.

// Eg- E 3 means add 3 in the queue

// D means to remove the front element of the queue and print it on the screen

// Note-If the queue is empty print- 'Empty' (Without the quotes)

// Output
// Print the front element as a single integer on the screen.


// Sample Input 1 

// 4
// E 2
// E 3
// D
// D
// Sample Output 1

// 2
// 3
// TC_O(N) SC_O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
//   console.log("n", n);
  let queue = [];
  for (let i = 1; i <= n; i++) {
    let [type, val] = input[i].trim().split(" ");
    if (type === "E") {
      queue.push(val);
    } else {
      if (queue.length > 0) {
        console.log(queue.shift());
      } else {
        console.log("Empty");
      }
    }
  }
}

runProgram("5\nE 2\nE 3\nD\nD\nD");
