// TC - O(N)
function runProgram(input) {
  input = input.trim().split("\n");
  //   console.log("input", input);

  let tcs = Number(input[0]);
  //   console.log("tcs", tcs);

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i++]);
    // console.log("n", n);

    let arr = input[i].trim().split(" ").map(Number);
    // console.log("arr", arr);

    const result = getSum(arr, n);
    console.log(result);
  }
}

const getSum = (a, n) =>
  a.reduce((acc, ele, index) => acc + ele * (index + 1), 0);

runProgram("2\n5\n1 2 3 4 5\n2\n100 1");
