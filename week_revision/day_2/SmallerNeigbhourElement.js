function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  // console.log('n', n);

  let arr = input[1].trim().split(" ").map(Number);
  // console.log('arr', arr);

  let stack = [],
    res = "";

  for (let i = 0; i < n; i++) {
    while (stack.length && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    if (!stack.length) {
      res += -1 + " ";
    } else {
      res += stack[stack.length - 1] + " ";
    }

    stack.push(arr[i]);
  }

  console.log(res);
}

runProgram("8\n39 27 11 4 24 32 32 1");
