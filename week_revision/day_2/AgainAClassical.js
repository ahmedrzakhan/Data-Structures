function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
//   console.log("n", n);

  for (let i = 1; i <= n; i++) {
    let a = input[i].trim().split("");
    // console.log("a", a);

    const result = checkBalanced(a);
    result ? console.log("balanced") : console.log("not balanced");
  }
}

const checkBalanced = (a) => {
  let stack = [];

  for (let i = 0; i < a.length; i++) {
    if (a[i] === "(" || a[i] === "{" || a[i] === "[") {
      stack.push(a[i]);
    } else {
      if (stack.length) {
        if (
          (stack[stack.length - 1] === "(" && a[i] !== ")") ||
          (stack[stack.length - 1] === "[" && a[i] !== "]") ||
          (stack[stack.length - 1] === "{" && a[i] !== "}")
        ) {
          return false;
        } else {
          stack.pop();
        }
      } else {
        return false;
      }
    }
  }

  if (!stack.length) {
    return true;
  } else {
    return false;
  }
};

runProgram("3\n{([])}\n()\n([]");
