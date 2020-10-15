// Reverse Infix Postfix
// Description

// Postfix Expression- If the operator appears in the expression after the operands.

// Example- abc*+d+

// Infix Expression- Operators are written in-between their operands. This is the usual
//  way we write expressions.

// Example- Infix of the above expression would be ((a+(b* c))+d)

// The compiler scans the expression either from left to right or from right to left.

// The repeated scanning makes it very in-efficient. Thus Infix Counterpart of a Postfix 
// expression is hard to evaluate comparatively.

// Remember Use proper brackets in the output

// Input
// Input Format

// One line containing the postfix expression

// Constraints

// Number of operands <= 26

// Output
// One line containing the infix counterpart


// Sample Input 1 

// ab+c-def-*g/+hij/*+

// Sample Output 1

// ((((a+b)-c)+((d*(e-f))/g))+(h*(i/j)))

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
