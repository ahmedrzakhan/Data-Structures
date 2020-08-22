function runProgram(input) {
  input = input.split("\n");

  let n = Number(input[0]);
//   console.log("n", n);

  let arr = input[1].split(" ").map(Number);
//   console.log("arr", arr);

  let start = 0,
    end = n - 1;

  const sorted = mergeSort(arr, start, end);
  console.log(sorted.join(' '));
}

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
    k = start,
    temp = [];

  while (i <= mid && j <= end) {
    if (arr[i] > arr[j]) {
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

runProgram("5\n2 3 1 4 5");
