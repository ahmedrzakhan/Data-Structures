// O(Log N)
function runProgram(input) {
  input = input.trim().split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
//   console.log("n, k", n, k);

  let arr = input[1].trim().split(" ").map(Number);
//   console.log("arr", arr);

  let lo = 0,
    hi = n - 1;

  const result = checkPresence(arr, lo, hi, k);
  console.log(result);
}

const checkPresence = (a, lo, hi, k) => {
  while (lo <= hi) {
    let mid = lo + Math.floor((hi - lo) / 2);

    if (a[mid] === k) {
      return mid;
    }
    // Both Sorted
    if (a[lo] <= a[mid] && a[mid] <= a[hi]) {
      if (k <= a[mid]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    // Left Sorted
    else if (a[lo] <= a[mid] && a[mid] >= a[hi]) {
      if (k >= a[lo] && k <= a[mid]) {
        hi = mid - 1;
      } else {
        lo = mid + 1;
      }
    }
    //   Right Sorted
    else if (a[lo] >= a[mid] && a[mid] <= a[hi]) {
      if (k >= a[mid] && k <= a[hi]) {
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }
  }

  return -1;
};
runProgram("5 1\n3 4 5 1 2");
runProgram("6 6\n3 4 7 9 1 2")