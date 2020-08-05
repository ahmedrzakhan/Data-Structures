function runProgram(input) {
  input = input.split("\n");

  let [n, X] = input[0].split(" ").map(Number),
    count = 0;
  // console.log("n, X", n, X);

  let arr = input[1].split(" ").map(Number);
  // console.log("arr", arr);

  let result = countSum(0, 0);
  console.log(result);

  function countSum(i, sum) {
    if (i === n) {
      if (sum === X) {
        count++;
      }
      return count;
    }

    // console.log("i + 1", i + 1,"sum", sum,"i", i,"arr[i]", arr[i],"sum+arr[i]", sum + arr[i])
    count = countSum(i + 1, sum + arr[i]);
    count = countSum(i + 1, sum);

    return count;
  }
}

runProgram("3 3\n1 2 3");
