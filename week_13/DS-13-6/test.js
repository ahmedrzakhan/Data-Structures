// Perform Operations
function processData(input) {
  input = input.split("\n");
  let [row, col] = input[0].split(" ").map(Number);
  //console.log(row,col)
  let matrix = [];
  let arr1 = [];
  for (var i = 0; i < row; i++) {
    matrix[i] = input[i + 1].split(" ").map(Number);
  }
  let [v1, v2, v3, v4] = input[row + 1].split(" ").map(Number);
  let rowSum = 0;
  for (let i = 0; i < row; i++) {
    let op1 = 0;
    let op2 = 0;
    let op3 = 0;
    for (let j = 0; j < col; j++) {
      op1 += Math.abs(matrix[i][j] + v1);
      op2 += Math.abs(v2);
      op3 += Math.abs(matrix[i][j]);
    }
    rowSum += Math.max(op1, Math.max(op2, op3));
  }

  let colSum = 0;
  for (let i = 0; i < col; i++) {
    let op1 = 0;
    let op2 = 0;
    let op3 = 0;
    for (let j = 0; j < row; j++) {
      op1 += Math.abs(matrix[j][i] + v3);
      op2 += Math.abs(v4);
      op3 += Math.abs(matrix[j][i]);
    }
    colSum += Math.max(op1, Math.max(op2, op3));
  }
  console.log(Math.max(rowSum, colSum));
}

// string and matrix
function processData(input) {
  input = input.split("\n");
  let test = Number(input[0]);

  for (let t = 1; t < input.length - 1; t++) {
    let [n, m] = input[t].trim().split(" ").map(Number);
    let matrix = [];
    let k = 0;
    for (var i = t + 1; i < n + t + 1; i++) {
      input[i] = input[i].trim().split("");

      for (var j = 0; j < m; j++) {
        if (j === 0) {
          matrix.push([]);
        }
        matrix[k].push(input[i][j]);
      }
      k++;
    }
    t = n + t + 1;
    stringchecker(matrix, input[t]) ? console.log("Yes") : console.log("No");
  }
  function stringchecker(matrix, str) {
    str = str.trim().split("");
    for (let i = 0; i < str.length; i++) {
      let j = Math.floor(i % matrix.length);
      for (let k = 0; k < matrix[j].length; k++) {
        if (str[i] == matrix[j][k]) {
          // console.log(j ,k)
          matrix[j][k] = "-1";
          break;
        }
        if (k == matrix[j].length - 1 && str[i] !== matrix[j][k]) {
          return false;
        }
      }
    }
    return true;
  }
}
