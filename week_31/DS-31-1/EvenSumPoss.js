// TC_O(N) SC_O(1)
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
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum = sum + a[i];

    if (sum % 2 === 0 || a[i] % 2 === 0) {
      return "Yes";
    }
  }

  return "No";
};

runProgram("2\n1\n5\n3\n1 3 3");
