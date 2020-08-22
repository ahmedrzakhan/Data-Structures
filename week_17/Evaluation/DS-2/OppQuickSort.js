function runProgram(input) {
  input = input.split("\n");

  let n = Number(input[0]);

  let arr = input[1].split(" ").map(Number);

  //   console.log("n, arr", n, arr);

  let start = 0,
    end = n - 1;

  const sorted = quickSort(arr, start, end);
  console.log(sorted.join(' '));
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
  let i = high,
    j = low,
    pivot = arr[low];

  while (i > j) {
    while (arr[j] >= pivot && j < high) {
      j++;
    }
    while (arr[i] < pivot && i > 0) {
      i--;
    }

    if (i > j) {
      swap(arr, i, j);
    }
  }
  swap(arr, i, low);
  return i;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

runProgram("5\n2 3 1 4 5");
