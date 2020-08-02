// You are given a list of  numbers . For each element at position  (), we define  and  as:
//  = closest index j such that j < i and . If no such j exists then  = 0.
//  = closest index k such that k > i and . If no such k exists then  = 0.

// We define  =  * . You need to find out the maximum  among all i.

// Input Format

// The first line contains an integer , the number of integers. The next line contains
// the  integers describing the list a[1..N].

// Constraints

// Output Format

// Output the maximum  among all indices from  to .

// Sample Input

// 5
// 5 4 3 4 5
// Sample Output

// 8
// Explanation

// We can compute the following:

// The largest of these is 8, so it is the answer.

function solve(arr) {
  let n = arr.length;
  console.log("n", n);

  let left = [0],
    leftIndex = [0];

  for (let i = 0; i < n; i++) {
    while (
      leftIndex.length > 0 &&
      arr[leftIndex[leftIndex.length - 1]] <= arr[i]
    ) {
      leftIndex.pop();
    }

    if (leftIndex.length === 0) {
      left[i] = 0;
    } else {
      left[i] = leftIndex[leftIndex.length - 1] + 1;
    }

    leftIndex.push(i);
  }

  console.log("left", left);

  let right = [0],
    rightIndex = [n - 1];

  for (let i = n - 1; i >= 0; i--) {
    while (
      rightIndex.length > 0 &&
      arr[rightIndex[rightIndex.length - 1]] <= arr[i]
    ) {
      rightIndex.pop();
    }

    if (rightIndex.length === 0) {
      right[i] = 0;
    } else {
      right[i] = rightIndex[rightIndex.length - 1] + 1;
    }

    rightIndex.push(i);
  }

  console.log("right", right);

  let maxArr = left.map((ele, index) => ele * right[index]);

  let max = Math.max(...maxArr);

  return max;
}

solve("5 4 3 4 5");
