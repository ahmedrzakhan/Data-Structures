// TC - O(N) SC - O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i++]);
    // console.log("n", n);

    let arr = input[i].trim().split(" ").map(Number);
    // console.log("arr", arr);

    const result = check(arr, n);
    console.log(result);
  }
}

const check = (a, n) => {
  let c = 0,
    i = 0;
  while (i < n) {
    if (a[i] % 2 === 0) {
      c++;
      if (c === 3) {
        return "Yes";
      }
    } else {
      c = 0;
    }
    i++;
  }
  return "No";
};

runProgram("2\n3\n1 2 3\n5\n1 2 4 6 8");
