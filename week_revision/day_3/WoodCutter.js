// TC - O(N) SC - O(1)

function runProgram(input) {
  input = input.trim().split("\n");

  let [n, k] = input[0].trim().split(" ").map(Number);
//   console.log("n, k", n, k);

  let arr = input[1].trim().split(" ").map(Number);
//   console.log("arr", arr);

  let lo = Math.min(...arr),
    hi = Math.max(...arr);
//   console.log("lo", lo, "hi", hi);

  const check = (val) => {
    let sum = 0;

    for (let i = 0; i < n; i++) {
      if (arr[i] > val) {
        sum += arr[i] - val;
      }
    }

    return sum >= k;
  };

  const BS = (lo, hi) => {
    let output;
    while (lo <= hi) {
      let mid = Math.floor(lo + (hi - lo) / 2);

      if (check(mid)) {
        output = mid;
        lo = mid + 1;
      } else {
        hi = mid - 1;
      }
    }

    return output;
  };

  const result = BS(lo, hi);
  console.log(result);
}

runProgram("4 7\n20 15 10 17");
