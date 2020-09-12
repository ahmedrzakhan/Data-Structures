// You will be given an array of integers and a target value. Determine the 
// number of pairs of array elements that have a difference equal to a target value.

// For example, given an array of [1, 2, 3, 4] and a target value of 1, we have 
// three values meeting the condition: , , and .

// Function Description

// Complete the pairs function below. It must return an integer representing the 
// number of element pairs having the required difference.

// pairs has the following parameter(s):

// k: an integer, the target difference
// arr: an array of integers
// Input Format

// The first line contains two space-separated integers  and , the size of  and the
//  target value.
// The second line contains  space-separated integers of the array .

// Constraints

// each integer  will be unique
// Output Format

// An integer representing the number of pairs of integers whose difference is .

// Sample Input

// 5 2  
// 1 5 3 4 2  
// Sample Output

// 3
// Explanation

// There are 3 pairs of integers in the set with a difference of 2: [5,3], [4,2] and [3,1] .

function runProgram(input) {
  input = input.split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
  //   console.log("n, k", n, k);

  let a = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  //   console.log("a", a);

  let count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let diff = a[j] - a[i];
      if (diff === k) {
        count++;
      } else if (diff < k) continue;
      else if (diff > k) break;
    }
  }
  console.log(count);
}

runProgram("5 2\n1 5 3 4 2");

// Binary Search O(NlogN)

// O(NLogN)
function runProgram(input) {
  input = input.trim().split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
  console.log("n, k", n, k);

  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  console.log("arr", arr);

  let count = 0;

  for (let i = 0; i < n; i++) {
    let val = k + arr[i];
    if (BS(arr, i + 1, n - 1, val)) {
      count++;
    }
  }
  console.log(count);
}

const BS = (a, lo, hi, val) => {
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (a[mid] === val) return true;
    else if (a[mid] < val) lo = mid + 1;
    else hi = mid - 1;
  }

  return false;
};

runProgram("5 2\n1 5 3 4 2");
