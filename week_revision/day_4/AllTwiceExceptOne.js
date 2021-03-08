// TC - O(NLOGN) SC - O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i++]);
    // console.log("n", n);

    let arr = input[i]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    // console.log("arr", arr);

    let result = getUnique(arr, n);
    console.log(result);
  }
}

const getUnique = (a, n) => {
  for (let i = 0; i < n; i++) {
    if (a[i] !== a[i + 1] && a[i] !== a[i - 1]) {
      return a[i];
    }
  }
};

runProgram("2\n1\n5\n5\n5 4 3 3 4");
