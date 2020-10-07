function runProgram(input) {
  let grid = input
    .trim()
    .split("\n")
    .map((ele) => ele.split(""));

//   console.log(grid);

  grid.map((ele) => ele.sort());

//   console.log(grid);

  const result = checkRows(grid) && checkCols(grid);
  result ? console.log("YES") : console.log("NO");

}

const checkCols = (grid) => {
    return true
}

const checkRows = (grid) => {
  for (let i = 0; i < grid.length; i++) {
    for (let j = i; j < grid[i].length; j++) {
      if (grid[i][j] > grid[i][j + 1]) {
        return false;
      }
    }
  }
  return true;
};

runProgram("nfghij\eabcd\nolkmn\ntrpqs\nxywuv");
