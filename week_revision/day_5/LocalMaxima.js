// TC - O(N) SC - O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i++]);
    // console.log("n", n);

    let arr = input[i].trim().split(" ").map(Number);
    // console.log("arr", arr);

    const result = getMaxima(arr, n);
    console.log(result);
  }
}

const getMaxima = (a, n) => {
  if (n < 3) return -1;

  let count = 0;

  for (let i = 1; i < n - 1; i++) {
    if (a[i] > a[i + 1] && a[i] > a[i - 1]) {
      count++;
    }
  }
  return count;
};

runProgram("2\n2\n1 2\n10\n884 729 768 201 266 494 597 328 705 287");
