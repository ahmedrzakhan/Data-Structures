// Infix Postfix
// Description

// Infix Expression- Operators are written in-between their operands. This is the 
// usual way we write expressions.

// Example- a+b-c

// Postfix Expression- If the operator appears in the expression after the operands.

// Example- Postfix of the above expression would be ab+c-

// The compiler scans the expression either from left to right or from right to left.

// Consider the below expression: a + b * c + d

// The compiler first scans the expression to evaluate the expression b * c, then again
//  scan the expression to add a to it. The result is then added to d after another scan.

// The repeated scanning makes it very in-efficient. It is better to convert the expression 
// to postfix(or prefix) form before evaluation.

// The postfix expression of this would be- abc*+d+

// This expression is much easy to evaluate than its infix counterpart.

// **Remember** Brackets too can be used in the input and postfix notation doesn't have brackets.

// You can refer tothislink for understanding in case you tried but could not achieve


// Input
// Input Format

// One line which contains the infix expression

// Constraints

// Number of the operands<=26


// Output
// One line which contains the postfix expression


// Sample Input 1 

// a+b-c+d*(e-f)/g+(h*(i/j))
// Sample Output 1

// ab+c-def-*g/+hij/*+

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
