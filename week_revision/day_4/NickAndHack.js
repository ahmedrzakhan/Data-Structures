function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
//   console.log("n", n);

  for (let i = 1; i <= n; i++) {
    let val = Number(input[i]);
    const result = hack(1, val);
    result ? console.log("Yes") : console.log("No");
  }
}

const hack = (bal, val) => {
  if (bal === val) {
    return true;
  }

  if (bal > val) {
    return false;
  }

  return hack(bal * 10, val) || hack(bal * 20, val);
};

runProgram("5\n1\n2\n10\n25\n200");
