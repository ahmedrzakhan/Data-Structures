// TC - O(1) SC - O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i]);
    const result = getG(n);
    console.log(result);
  }
}

const getG = (n) => {
  let val;
  if (n % 2 === 0) {
    val = n / 2;
  } else {
    val = (n - 1) / 2;
  }
  return val;
};

runProgram("3\n2\n11\n12");
