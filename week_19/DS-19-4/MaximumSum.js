function runProgram(input) {
  input = input.split("\n");

  let n = Number(input[0]);

  let arr = input[1].trim()
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b);

//   console.log(n, arr);

  let sum = arr
    .map((ele, index) => ele * index)
    .reduce((acc, ele) => acc + ele, 0);

  console.log(sum);
}

runProgram("4\n2 5 1 6");
