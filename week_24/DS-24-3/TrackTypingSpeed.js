// Track typing speed
// Description

// There is a special keyboard with all keys in a single row.

// You have given a string keyboard of length 26 indicating the layout 
// of the keyboard (indexed from 0 to 25), initially, your finger is at index 0. To type 
// a character, you have to move your finger to the index of the desired character. The 
// time taken to move your finger from index i to index j is |i – j|.

// You want to type a string S. Write a program to calculate how much time it takes to type 
// it with one finger.

// Explanation for sample input:


// Input
// Input Format

// First-line contains the order of keys.

// Second-line contains string S.

// Constraints

// 1 <= S.length <=100

// Output
// Print time is taken to type the given word.

// Sample Input 1 

// pqrstuvwxyzabcdefghijklmno
// hello
// Sample Output 1

// 31

// O(N)
function runProgram(input) {
  input = input.trim().split("\n");

  let keyboard = input[0].trim().split("");
  //   console.log("keyboard", keyboard);

  let arr = input[1].trim().split("");
  //   console.log("arr", arr);

  let n = arr.length;
  //   console.log("n", n);

  let sum = keyboard.indexOf(arr[0]);

  let prev = keyboard.indexOf(arr[0]);

  for (let i = 1; i < n; i++) {
    sum = sum + Math.abs(keyboard.indexOf(arr[i]) - prev);

    prev = keyboard.indexOf(arr[i]);
  }

  console.log(sum);
}

runProgram("pqrstuvwxyzabcdefghijklmno\nhello");
