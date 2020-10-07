function runProgram(input) {
  input = input.trim().split("\n");

  let [n, m] = input[0].trim().split(" ").map(Number);
  console.log("n, m", n, m);

  let arr = input[1].trim().split(" ").map(Number);
  console.log("arr", arr);

//   const result = BS(lo, hi);
//   console.log("result", result);



}

runProgram("7 2\n10 2 16 19 6 11 5\n29 25");
