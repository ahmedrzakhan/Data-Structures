
// Dance Night!
// Description

// Masai School will be hosting its Prom Night on 29th Feb.There would be M boys
//  and N girls at the prom tonight. Each boy wants a girl who is strictly shorter than
//  him. A girl can dance with only one boy and vice-versa.

// Given the heights of all the boys and girls comment whether it is possible for all boys to get a girl.

// Input
// The first line contains T denoting the number of test cases.
// Each test case contains three lines.
// The first line contains M and N.
// The second line contains M integers each denoting the height of boy.
// The third contains N integers each denoting the height of girl.
// Constraints
// 1<=T<=10
// 1<=N, M<=10000
// 1<=Height<=200

// Output
// Print YES if it is possible for each boy to get a girl else print NO.


// Sample Input 1 

// 1
// 4 5
// 2 5 6 8
// 3 8 5 1 7
// Sample Output 1

// YES

function runProgram(input) {
  input = input.split("\n");

  let tcs = Number(input[0]);

  let line = 1;

  for (let i = 0; i < tcs; i++) {
    let [n, m] = input[line++].split(" ").map(Number);
    // console.log("n, m", n, m);

    let boys = input[line++].split(" ").map(Number);
    // console.log("boys", boys);

    let girls = input[line++].split(" ").map(Number);
    // console.log("girls", girls);

    let result = check(boys, girls);
    // console.log("result", result);
  }
}

const check = (boys, girls) => {
  let start = 0,
    end = boys.length - 1;
  let sortBoys = mergeSort(boys, start, end);
//   console.log("sortBoys", sortBoys);

  end = girls.length - 1;
  let sortGirls = mergeSort(girls, start, end);
//   console.log("sortGirls", sortGirls);

  let output = sortBoys.map((ele, index) => {
    return ele > sortGirls[index];
  });

//   console.log("output", output);

  if (output.indexOf(false) !== -1) {
    console.log("NO");
  } else {
    console.log("YES");
  }
};

const mergeSort = (arr, start, end) => {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    mergeSort(arr, start, mid);
    mergeSort(arr, mid + 1, end);
    merge(arr, start, end);
  }
  return arr;
};

const merge = (arr, start, end) => {
  let mid = Math.floor((start + end) / 2);
  let i = start,
    j = mid + 1,
    k = start;
  let temp = [];

  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }

  while (i <= mid) {
    temp[k++] = arr[i++];
  }

  while (j <= end) {
    temp[k++] = arr[j++];
  }

  for (let l = start; l <= end; l++) {
    arr[l] = temp[l];
  }
  return arr;
};

runProgram("1\n4 5\n2 5 6 8\n5 8 5 1 7");
