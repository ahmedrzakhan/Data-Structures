function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
//   console.log("n", n);

  let arr = input[1].trim().split(" ").map(Number);
//   console.log("arr", arr);

  let lo = 0,
    hi = n - 1;
  let k = arr[0];
  const result = BS(lo, hi, arr, k);
  console.log(result);
}

const BS = (lo, hi, arr, k) => {
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] >= k) {
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return arr[lo];
};

runProgram("10\n4 6 7 9 10 -1 0 1 2 3");
