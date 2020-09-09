// Coding Practice Time
// Description

// Sandhya is going to practice N different problems in the exact given order over
//  the next M days. For each problem, she writes down the amount of time q[i] she
//   will take to think and code the i-th problem.

// Before starting on the problems, she took advice from experienced competitive
// programmers on her practice routine and almost all of them advised her to keep
// her daily load at the minimum possible and avoid over training.

// Since she already has N problems to solve, she asks you to find the minimum time
// T such that training everyday for a time t[i]<T is sufficient to solve all the N
// problems in M days.

// Note : Unlike in real world, you cannot think on a problem on one day and solve it
// on the other day. You need to do it on the very same day!

// Input
// Input Format :

// The first line contains two space separated integers N and M. The next line contains
//  N space separated integers denoting the time q[i] required to solve the i-th problem.

// Constraints :

// N <= 100000

// M < N

// q[i] <= 1000000000000

// Output
// The output consists of one integer, the minimum time T as described in the problem statement.

// Sample Input 1

// 5 3
// 1 2 2 1 3
// Sample Output 1

// 3

function runProgram(input) {
  input = input.split("\n");
  let [n, days] = input[0].split(" ").map(Number);

  let arr = input[1].split(" ").map(Number);

  let lo = Math.max(...arr);

  let hi = arr.reduce((acc, ele) => acc + ele, 0);

  const search = (lo, hi) => {
    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);

      if (check(arr, mid, days)) {
        hi = mid;
      } else {
        lo = mid + 1;
      }
    }
    return lo;
  };
  const result = search(lo, hi);
  console.log(result);
}

const check = (arr, hrsPerDay, days) => {
  let sum = 0;
  let spent_days = 0;

  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];

    if (sum > hrsPerDay) {
      sum = arr[i];
      spent_days++;
    } else if (sum === hrsPerDay) {
      sum = 0;
      spent_days++;
    }
  }

  if (sum > 0) {
    spent_days++;
  }

  return spent_days <= days;
};

runProgram("5 1\n1 8 2 1 3");
