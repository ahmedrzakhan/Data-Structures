function runProgram(input) {
  input = input.split("\n");

  let len = Number(input[0]);
  let arr = input[1].split(" ").map(Number);

  let start = 0,
    end = len - 1;

  let result = mergeSort(arr, start, end);
  console.log(...result);
}

const mergeSort = (arr, start, end) => {
  if (start < end) {
    let mid = Math.floor((start + end) / 2);
    // console.log("arr", arr, "start", start, "mid", mid);
    mergeSort(arr, start, mid);
    // console.log("arr", arr, "mid+1", mid + 1, "end", end);
    mergeSort(arr, mid + 1, end);
    // console.log("merge", "arr", arr, "start", start, "end", end);
    merge(arr, start, end);
  }
  return arr;
};

const merge = (arr, start, end) => {
  let mid = Math.floor((start + end) / 2);
  // console.log("mid in merge", mid);
  let i = start,
    j = mid + 1,
    k = start;
  let temp = [];
  // console.log("i, j", i, j);
  while (i <= mid && j <= end) {
    if (arr[i] < arr[j]) {
      temp[k++] = arr[i++];
    } else {
      temp[k++] = arr[j++];
    }
  }
  // console.log("temp after first while", temp);
  while (i <= mid) {
    temp[k++] = arr[i++];
  }
  while (j <= end) {
    temp[k++] = arr[j++];
  }
  // console.log("temp after second while", temp);
  for (let l = start; l <= end; l++) {
    arr[l] = temp[l];
  }
  // console.log("returned_arr", arr);
  return arr;
};

runProgram("4\n4 3 2 1");
