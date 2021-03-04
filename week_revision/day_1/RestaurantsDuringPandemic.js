// TC - O(NLogN) SC - O(1)
function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log("input", input);

  for (let i = 1; i < input.length; i++) {
    var [n, c] = input[i].trim().split(" ").map(Number);
    // console.log(n, c);

    var arr = input[++i]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    // console.log("arr", arr);

    let lo = Number.MAX_SAFE_INTEGER;

    for (let l = 1; l < n; l++) {
      lo = Math.min(lo, arr[l] - arr[l - 1]);
    }
    // console.log("lo", lo);
    let hi = arr[n - 1] - arr[0];
    // console.log("hi", hi);
    const result = BS(lo, hi);
    console.log(result);
  }

  function BS(lo, hi) {
    while (lo < hi) {
      let mid = Math.ceil((lo + hi) / 2);

      if (check(mid)) {
        lo = mid;
      } else {
        hi = mid - 1;
      }
    }
    return lo;
  }

  function check(mid) {
    let lastPos = arr[0];
    let seated = 1;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] - lastPos >= mid) {
        seated++;
        lastPos = arr[i];

        if (seated === c) {
          return true;
        }
      }
    }
    return false;
  }
}

runProgram("2\n5 2    \n2 4 1 6 8\n5 3\n3 1 3 3 3");
