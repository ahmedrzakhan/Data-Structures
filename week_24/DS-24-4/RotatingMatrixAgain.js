// TC (O(N)
function runProgram(input) {
  let arr = input.trim().split(" ").map(Number);
//   console.log("arr", arr);

  let n = arr.length;
//   console.log("n", n);

  let sqrt = Math.sqrt(n);
//   console.log("sqrt", sqrt);

  let matrix = [];

  for (let i = 0; i < n; i = i + sqrt) {
    matrix.push(arr.slice(i, i + sqrt));
  }
  console.log("matrix", matrix);

  let rotated = "";
  for (let i = 0; i < sqrt; i++) {
    let cols = getCols(matrix, i);
    rotated = rotated + cols.reverse().join(" ") + " ";
  }

  console.log(rotated);
}

const getCols = (mat, i) => mat.map((arr) => arr[i]);

runProgram("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16");
