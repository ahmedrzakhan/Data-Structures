function runProgram(input) {
  input = input.split("\n");

  let [n, c, r] = input[0].split(" ").map(Number);
  // console.log("n, c, r", n, c, r);

  let arr = input[1].split(" ").map(Number);
  //   console.log("arr", arr);

  let sorted = arr.sort((a, b) => a - b);
  // console.log("sorted", sorted);

  let sum = 0,
    count = 0,
    i = 0;

  while (sum < r && i < sorted.length) {
    sum = sum + sorted[i++];
    // console.log("sum", sum)
    count++;
  }

  //   console.log("sum", sum);
  //   console.log("count", count);

  if (sum > r) {
    count = count - 1;
  }

  if (count === c) {
    console.log("Party");
  } else {
    console.log("Sad");
  }
}

runProgram("5 3 24\n6 4 21 20 13");
