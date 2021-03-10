function runProgram(input) {
  input = input.trim().split("\n");

  let a = input[1].trim().split(" ").map(Number);

  console.log(a.indexOf(1));
}

runProgram("5\n0 0 0 0 0");
