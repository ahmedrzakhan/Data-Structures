// Can be sorted ?

// Given an array of distinct n integers. Check whether reversing one sub-array
// make the array sorted or not.

// If the array is already sorted or by reversing a subarray once make it sorted,
// print “YES”, else print “NO”.

// Input
// Input Format

// First line Consists of integer n.

// Second line consists of n integers separated by spaces.

// Constraints

// 1 <= n <= 10^6

// Output
// Print output string in a single line.

// Sample Input 1

// 10
// -1 0 1 2 3 10 9 7 6 4
// Sample Output 1

// YES
// Hint

// TC _ O(N) SC _ O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  //   console.log("n", n);

  let arr = input[1].trim().split(" ").map(Number);
  //   console.log("arr", arr);

  const result = check(arr, n);
  console.log(result);
}

const check = (a, n) => {
  let i = 0;
  while (i < n - 1 && a[i] < a[i + 1]) {
    i++;
  }
  //   console.log("i", i);

  let j = n - 1;
  while (j > 0 && a[j] > a[j - 1]) {
    j--;
  }
  //   console.log("j", j);

  for (let k = i; k <= (i + j) / 2; k++) {
    swap(a, k, i + j - k);
  }

  for (let i = 0; i < n - 1; i++) {
    if (a[i] > a[i + 1]) {
      return "NO";
    }
  }
  //   console.log("a", a);
  return "YES";
};

const swap = (a, i, j) => {
  let temp = a[i];
  a[i] = a[j];
  a[j] = temp;
};

// runProgram("10\n-1 0 1 2 3 10 9 7 6 4");
runProgram("7\n1 5 4 3 10 -1 10");

// TC _ O(N) SC _ O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  //   console.log("n", n);

  let arr = input[1].trim().split(" ").map(Number);
  //   console.log("arr", arr);

  const result = check(arr, n);
  console.log(result);
}

const check = (a, n) => {
  let i = 0;
  while (i < n - 1 && a[i] < a[i + 1]) {
    i++;
  }
  //   console.log("i", i);

  let j = n - 1;
  while (j > 0 && a[j] > a[j - 1]) {
    j--;
  }
  //   console.log("j", j);

  for (let k = i; k < j - 1; k++) {
    if (a[k] < a[k + 1]) {
      return "NO";
    }
  }

  return "YES";
};
