function runProgram(input) {
  input = input.trim().split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
  //   console.log("n, k", n, k);

  let a = input[1].trim().split(" ").map(Number);
  //   console.log("a", a);

  let lo = 0;
  let hi = n - 1;

  let u = getUpperBound(a, lo, hi, k);
//   console.log("u", u);

  let l = getLowerBound(a, lo, hi, k);
//   console.log("l", l);

  console.log(u - l + 1);
}

const getLowerBound = (a, lo, hi, k) => {
  let output;
  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);
    if (a[mid] >= k) {
      output = mid;
      hi = mid - 1;
    } else {
      lo = mid + 1;
    }
  }
  return output;
};

getUpperBound = (a, lo, hi, k) => {
  let output;
  while (lo <= hi) {
    let mid = Math.floor(lo + (hi - lo) / 2);
    if (a[mid] <= k) {
      output = mid;
      lo = mid + 1;
    } else {
      hi = mid - 1;
    }
  }
  return output;
};

runProgram("6 3\n3 3 3 3 3 3");
// runProgram("6 3\n3 3 3 3 6 3");
