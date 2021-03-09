// TC - O(N) SC - O(1)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    let s = input[i].trim();
    const res = getCount(s);
    console.log(res);
  }
}

const getCount = (s) => {
  let c = 1,
    n = s.length - 1,
    i = 0;

  while (i < n) {
    if (s[i] !== s[i + 1]) {
      c++;
    }
    i++;
  }
  return c;
};

runProgram("2\naaaaa\nabbbaaz");
