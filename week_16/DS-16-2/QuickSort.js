function runProgram(input) {
  input = input.split("\n");

  let len = Number(input[0]);
  let arr = input[1].split(" ").map(Number);

//   console.log("len, arr", len, arr);

  let start = 0,
    end = len - 1;

  const result = quickSort(arr, start, end);
  console.log(...result);
}

const quickSort = (arr, start, end) => {
  if (start < end) {
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
  }
  return arr;
};

const partition = (arr, low, high) => {
  let i = low,
    j = high;
  let pivot = arr[high];
  while (i < j) {
    while (arr[j] >= pivot && j > 0) {
      j--;
    }
    while (arr[i] < pivot && i < high) {
      i++;
    }
    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, i, high);
  return i;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

runProgram("4\n3 4 2 1");
