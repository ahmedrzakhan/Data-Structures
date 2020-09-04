// TC - O(Log N)
function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  // console.log("n", n);

  let arr = input[1].trim().split(" ").map(Number);
  // console.log("arr", arr);

  let k = Number(input[2]);
  //   console.log("k", k);

  let start = 0,
    end = n - 1;

  const i = getLowerBound(arr, start, end, k, -1);
  //   console.log(i);

  const j = getUpperBound(arr, start, end, k, -1);
  //   console.log(j);

  if (i === -1 && j === -1) {
    console.log(i, j, 0);
    return;
  }

  const result = i - j + 1;
  console.log(j, i, result);
}

const getUpperBound = (arr, start, end, k, last) => {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === k) {
      last = mid;
      end = mid - 1;
    } else if (arr[mid] < k) {
      start = mid + 1;
    } else if (arr[mid] > k) {
      end = mid - 1;
    }
  }

  return last;
};

const getLowerBound = (arr, start, end, k, first) => {
  while (start <= end) {
    let mid = start + Math.floor((end - start) / 2);

    if (arr[mid] === k) {
      first = mid;
      start = mid + 1;
    } else if (arr[mid] < k) {
      start = mid + 1;
    } else if (arr[mid] > k) {
      end = mid - 1;
    }
  }

  return first;
};
runProgram("6\n1 1 1 2 2 2\n2");
