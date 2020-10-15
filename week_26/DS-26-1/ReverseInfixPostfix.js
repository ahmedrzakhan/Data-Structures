function runProgram(input) {
  let arr = input.trim();
//   console.log("arr", arr);

  let obj = {
    "(": 0,
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };

  let n = arr.length, stack = []

  let firstEle, secondEle, result;
  for (let i = 0; i < n; i++) {
    if (obj[arr[i]]) {
      secondEle = stack.pop();
      firstEle = stack.pop();
      result = "(" + firstEle + arr[i] + secondEle + ")";
      stack.push(result);
    } else {
      stack.push(arr[i]);
    }
  }

  let answer = stack.pop();
  console.log(answer);
}

runProgram("ab+c-def-*g/+hij/*+");
