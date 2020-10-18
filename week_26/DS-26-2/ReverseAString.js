// TC_O(N) SC_O(N)
function runProgram(input) {
  let arr = input.trim().split("");

  let n = arr.length - 1,
    s = "";

  const result = reverseString(arr, s, n);
  console.log(result);
}

const reverseString = (arr, s, n) => {
  if (n === -1) {
    return s;
  } else {
    return s + arr[n] + reverseString(arr, s, n - 1);
  }
};

runProgram("Masai school");
// runProgram("");
