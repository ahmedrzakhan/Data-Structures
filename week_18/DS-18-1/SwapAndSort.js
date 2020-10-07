function runProgram(input) {
  input = input.trim().split("\n");

  let tcs = Number(input[0]);
  // console.log("tcs", tcs);

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i++]);
    let arr = input[i].trim().split(" ").map(Number);
    // arr.unshift(0);
    // console.log("n, arr", n, arr);
    const sorted = sortArray(arr, n);
    // console.log("sorted", sorted);

    const result = checkIfSorted(arr, n);
    if (result) {
      console.log("YES");
      console.log(...sorted);
    } else {
      console.log("NO");
    }
  }
}

const checkIfSorted = (arr, n) => {
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }
  return true;
};

const sortArray = (arr, n) => {
  for (let i = 0; i < n - 1; i++) {
    if (arr[i] > arr[i + 1]) {
      arr[i] = arr[i] - 1;
      arr[i + 1] = arr[i + 1] + 1;
      swap(arr, i, i + 1);
    }
  }
//   arr.shift();
  return arr;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

runProgram("2\n4\n7 3 9 10\n3\n11 1 9");
