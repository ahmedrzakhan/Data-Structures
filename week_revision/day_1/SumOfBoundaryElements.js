// TC - O(N2)
// SC - O(1)
function runProgram(input) {
  input = input.trim().split("\n");
//   console.log("input", input);

  let n = Number(input[0]);
//   console.log("n", n);

  input.shift();

  let arr = input.map((ele) => ele.split(" ").map(Number));
//   console.log("arr", arr);

  let sum = 0;
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (
        i === 0 ||
        j === 0 ||
        i === n - 1 ||
        j === n - 1 ||
        i + j === n - 1 ||
        i === j
      ) {
        sum = sum + arr[i][j];
      }
    }
  }
  console.log(sum);
}

runProgram("5\n1 2 3 4 5\n6 7 8 9 1\n2 3 4 5 6\n7 8 9 1 2\n3 4 5 6 7");
