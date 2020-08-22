function runProgram(input) {

  input = input.split("\n");
  let [n, money] = input[0].split(" ").map(Number);
//   console.log("n, money", n, money);

  let arr = input[1].split(" ").map(Number);
//   console.log("arr", arr);

  let sorted = arr.sort((a, b) => a - b);
//   console.log("sorted", sorted);
  let sum = 0, i = 0, count = 0;

  while ( sum <= money && i <= arr.length) {
      sum = sum + sorted[i++];
      count++;
  }

  if ( sum > money ) {
      console.log(count - 1);
  } else {
      console.log(count)
  }

}

runProgram("4 10\n5 4 2 4");
