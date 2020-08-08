// Generate Permutations
// Description
// Given a collection of numbers, return all possible permutations.
// NOTE:
// No two entries in the permutation sequence should be the same.
// For the purpose of this problem, assume that all the numbers in the collection are unique.
// USING BUILT-IN LIBRARY FUNCTION TO PERMUTE WILL LEAD TO DISQUALIFICATION

// Input
// Input Format :
// The first line of input contain an integer n - denoting the size of array
// The next line contain n distinct integers, A[1],A[2]...A[N]
// Constraints :
// 1<= n <=6

// Output
// Print the permutations of numbers in new line seperated by space, also make
//  sure the permutations are printed in sorted order that is "1 2 3" must come 
//  before "2 3 1". Print without quotes. See sample test case for better understanding.


// Sample Input 1 

// 3
// 1 2 3
// Sample Output 1

// 1 2 3 
// 1 3 2 
// 2 1 3 
// 2 3 1 
// 3 1 2 
// 3 2 1

function runProgram(input) {
  input = input.split("\n");
  let n = Number(input[0]);
  let arr = input[1].split(" ");
  let result = [];

  permutation(0, arr, result);
  console.log(result.sort().join("\n"));
}

const permutation = (i, arr, result) => {
  if (i === arr.length) {
    return result.push([...arr].join(" "));
  } else {
    for (let j = i; j < arr.length; j++) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;

      permutation(i + 1, arr, result);

      let newTemp = arr[j];
      arr[j] = arr[i];
      arr[i] = newTemp;
    }
  }
};
runProgram("3\n1 2 3");
