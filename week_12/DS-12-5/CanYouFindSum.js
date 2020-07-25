// Teena is very good at competitive programming ,she solved enough problems on arrays 
// and her friend wants to test her knowledge in arrays ,so gave her following task :

// The problem is given an array A having N integers, for each element i (1 <= i <= N), 
// find x+y where x is the largest number less than i such that A[x]>A[i] and y is the 
// smallest number greater than i such that A[y]>A[i].

// If there is no x < i such that A[x]>A[i], then take x=−1. Similarly, if there is no 
// y>i such that A[y]>A[i], then take y=−1.

// Input Format

// First line consists of a single integer denoting N.

// Second line consists of N space separated integers denoting the array A.

// Constraints

// 1 <= N <= 10^6

// 1 <= A[i] <= 10^9

// Output Format

// Print N space separated integers, denoting x+y for each i

// Sample Input 0

// 5
// 5 4 1 3 2
// Sample Output 0

// -2 0 6 1 3 
// Explanation 0

// Values of x for each i: -1,1,2,2,4

// Values of y for each i: -1,-1,4,-1,-1

// So, x+y for each i: -2,0,6,1,3



function processData(input) {
  let [size, arr] = input.split("\n");
  size = Number(size);
  // console.log("size", size);
  arr = arr.split(" ").map(Number);
  // console.log("arr", arr);
  arr.unshift(0);
  // console.log("arr", arr);

  const n = arr.length,
    newArr = [];

  for (let i = 1; i < n; i++) {
    let x = -1;
    for (let j = i; j >= 0; j--) {
      if (arr[j] > arr[i]) {
        x = j;
        break;
      }
    }
    // console.log("x", x);

    let y = -1;
    for (let k = i; k < n; k++) {
      if (arr[k] > arr[i]) {
        y = k;
        break;
      }
    }
    // console.log("y", y);

    // console.log("x + y", x + y);
    newArr.push(x + y);
  }
  console.log(newArr.join(" "));
}
