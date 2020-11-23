// [0, 1, 2, 3]
// [0, 4, 5, 1, 2, 7, 6, 3, 3];

function runProgram(a, b) {
  let n = b.length;

  let counter = 0;

  for (let i = 0; i < n; i++) {
    if (a[counter] === b[i]) {
      counter++;
    }
    if (counter === a.length) {
      return true;
    }
  }
  return false;
}

console.log(runProgram([0, 1, 2, 3], [0, 4, 5, 1, 2, 7, 6, 3, 3]));
