// Discover number
// Description

// You are given an array A of size N, and Q queries to deal with. For each query,
//  you are given an integer X, and you're supposed to find out if X is present in the
//   array A or not.

// Input
// Input Format

// The first line contains two integers, N and Q, denoting the size of array A and number of queries.

// The second line contains N space separated integers, denoting the array of elements Ai.

// The next Q lines contain a single integer X per line.

// Constraints

// 1 <= N, Q <= 10^5

// 1 <= Ai <= 10^9

// 1 <= X <= 10^9

// Output
// Output Format

// For each query, print YES if the X is in the array, otherwise print NO.

// Sample Input 1

// 5 10
// 50 40 30 20 10
// 10
// 20
// 30
// 40
// 50
// 60
// 70
// 80
// 90
// 100
// Sample Output 1

// YES
// YES
// YES
// YES
// YES
// NO
// NO
// NO
// NO
// NO

function runProgram(input) {
  input = input.split("\n");

  let [n, k] = input[0].split(" ").map(Number);
  //   console.log("n, k", n, k);

  let arr = input[1]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);
  //   console.log("arr", arr);

  let start = 0,
    end = n - 1;
  //   console.log("start, end", start, end);

  for (let i = 2; i < input.length; i++) {
    let result = checkPresence(arr, start, end, Number(input[i]));
    console.log(result);
  }
}

const checkPresence = (arr, start, end, target) => {
  while (start <= end) {
    // let mid = Math.floor((start + end) / 2);
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === target) {
      return "YES";
    } else if (arr[mid] < target) {
      start = mid + 1;
    } else if (arr[mid] > target) {
      end = mid - 1;
    }
  }
  return "NO";
};

runProgram("5 10\n50 40 30 20 10\n10\n20\n30\n40\n50\n60\n70\n80\n90\n100");
