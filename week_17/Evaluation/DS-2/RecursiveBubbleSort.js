function runProgram(input) {
  input = input.split("\n");

  let len = Number(input[0]);
  let arr = input[1].split(" ").map(Number);

  //   console.log("len, arr", len, arr);

  const result = bubbleSort(arr, len);
  console.log(...result);
}

const bubbleSort = (arr, n) => {
  if (n === 1) {
    return arr;
  } else {
    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        swap(arr, i, i + 1);
      }
    }
    return bubbleSort(arr, n - 1);
  }
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

runProgram("5\n3 5 0 9 8");
