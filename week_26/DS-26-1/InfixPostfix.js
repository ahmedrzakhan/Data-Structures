function runProgram(input) {
  let arr = input.trim().split("");
//   console.log(arr);

  let precedence = {
    "(": 0,
    "+": 1,
    "-": 1,
    "*": 2,
    "/": 2,
    "^": 3,
  };

  let result = "",
    stack = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "(") {
      stack.push(arr[i]);
    } else if (arr[i] === ")") {
      while (stack.length > 0) {
        if (stack[stack.length - 1] === "(") {
          stack.pop();
          break;
        } else {
          let ele = stack.pop();
          result = result + ele;
        //   console.log("ele, result", ele, result)
        }
      }
    } else if (arr[i] in precedence) {
      if (stack.length === 0) {
        stack.push(arr[i]);
      } else {
        while (stack.length > 0) {
          let top = stack[stack.length - 1];
          if (precedence[top] >= precedence[arr[i]]) {
            let ele = stack.pop();
            result = result + ele;
          } else {
            break;
          }
        }
        stack.push(arr[i]);
      }
    } else {
      result = result + arr[i];
    }
  }

  while (stack.length > 0) {
    let ele = stack.pop();
    result = result + ele;
  }

  console.log(result);
}

runProgram("a+b-c+d*(e-f)/g+(h*(i/j))");
