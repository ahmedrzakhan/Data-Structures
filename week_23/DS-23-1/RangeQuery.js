
// A range query
// Description

// Let's not make many stories and get into the main problem statement.

// You have been given an array of n integers and two more integers x and y. Your 
// task is to find the count of integers lying between x and y (both inclusive).

// You can use the built-in sort function to sort if required. But other than sorting, 
// all the task - mainly to find the count of integers lying the given range needs to 
// be done in log(n) time complexity. Breaching the expected time complexity will be 
// considered as a wrong submission


// Input
// First-line contains three integers in the given order: n, x, y

// Next line contains n space-separated integers


// Output
// Output one number which is the final count of such numbers


// Sample Input 1 

// 6 1 5
// 4 3 2 5 9 5
// Sample Output 1

// 5


function runProgram(input) {
  input = input.trim().split("\n");

  let [n, start, end] = input[0].trim().split(" ").map(Number);
//   console.log("n, start, end", n, start, end);

  let arr = input[1]
    .trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
//   console.log("arr", arr);

  let lo = 0,
    hi = n - 1;

  let lower = BSL(lo, hi, arr, start);
//   console.log(lower);

  const upper = BSU(lo, hi, arr, end);
//   console.log(upper);

  console.log(upper - lower + 1);
}

const BSL = (lo, hi, arr, k) => {
  let output;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] >= k) {
      output = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return output;
};

const BSU = (lo, hi, arr, k) => {
  let output;
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (arr[mid] <= k) {
      output = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return output;
};

runProgram("6 1 5\n4 3 2 5 9 5");
