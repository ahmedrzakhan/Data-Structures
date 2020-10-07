function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 0; i < input.length - 1; i++) {
    let n = Number(input[i++]);
    // console.log("n", n);

    let arr = input[i]
      .trim()
      .split(" ")
      .map(Number)
      .sort((a, b) => a - b);
    console.log("arr", arr);

    const result = getCount(arr, n);
    console.log(result);
  }
}

const getCount = (arr, n) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      for (let k = j + 1; k < n; k++) {
        if (arr[i] + arr[j] < arr[k]) {
          console.log("arr[i]", arr[i], "arr[j]", arr[j], "arr[k]", arr[k]);
          count++;
        }
      }
    }
  }
  return count;
};

// runProgram("3\n4 2 10\n3\n1 2 3\n4\n5 2 9 6\n0");
runProgram("6\n2 2 7 2 2 7");
