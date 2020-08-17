function runProgram(input) {
  input = input.split("\n");

  let [n, k] = input[0].split(" ").map(Number);
//   console.log("n, k", n, k);

  let arr = input[1].split(" ").map(Number);
//   console.log("arr", arr);

    // return (a % k) - (b % k);
    
  let sorted = arr.sort((a, b) => {
    if (a % k > b % k) {
      return 1;
    } else if (a % k < b % k) {
      return -1;
    }
  });

  console.log(...sorted);
}

runProgram("5 6\n12 18 17 65 46");
