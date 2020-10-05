// String and Sequence
// Description

// Given a string S and a sequence P, replace multiple occurrences of a sequence
// by character ‘X’. The conversion should be in-place and solution should replace
//  multiple consecutive (and non-overlapping) occurrences of a sequence by a single ‘X’.

// Input
// Input Format

// First-line contains strings S
// Second-line contains the sequence P.
// Constraints

// 1 <= length S, P <=  100

// Output
// Print the result string after replacing the sequences by X

// Sample Input 1

// aaaaa
// aa
// Sample Output 1

// Xa
// Hint

// Sample 1 Explanation

// S = aaaaa

// P = aa

// here 'aa' appeared twice and  consecutively hence replaced by single "X"

// output = Xa

// TC - O(N)

function runProgram(input) {
  input = input.trim().split("\n");

  let seq = input[1].trim();
  //   console.log("seq", seq);

  let arr = input[0].trim().split(seq).join("X").split("");
  //   console.log(arr);

  for (let i = 0; i < arr.length - 1; i++) {
    // console.log(i);
    if (arr[i] === "X" && arr[i + 1] === "X") {
      arr[i] = "";
    }
  }

  console.log(arr.join(""));
}

runProgram("aaaaaaa\naa");
// runProgram("aabaa\naa");
// runProgram("vvccvvcc\nvv");
