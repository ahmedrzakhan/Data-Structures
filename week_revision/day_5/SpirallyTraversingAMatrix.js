// TC - O(N2) SC - O(N2)
function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  //   console.log("n", n);

  let mat = [];

  for (let i = 1; i < input.length; i++) {
    mat.push(input[i].trim().split(" ").map(Number));
  }

  //   console.log("mat", mat);

  let top = 0,
    bottom = n - 1,
    spiral = "";

  while (top < bottom) {
    for (let i = top; i <= bottom; i++) {
      spiral = spiral + mat[top][i] + " ";
    }

    for (let j = top + 1; j <= bottom; j++) {
      spiral = spiral + mat[j][bottom] + " ";
    }

    for (let i = bottom - 1; i >= top; i--) {
      spiral = spiral + mat[bottom][i] + " ";
    }

    for (let j = bottom - 1; j >= top + 1; j--) {
      spiral = spiral + mat[j][top] + " ";
    }

    top++;
    bottom--;
  }

  console.log(spiral);
}

runProgram("4\n1 2 3 4\n5 6 7 8\n1 2 3 4\n5 6 7 8");
