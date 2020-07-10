// Given a string containing three types of paranthesis : (), [], {}, write a program 
// to check whether the string contains a valid sequence of parentheses.

// Input Format

// Input contains one line which is the string with parentheses whose validity you have to check

// Constraints

// length of string <= 1000

// Output Format

// Print "balanced" (without quotes) if it has a sequence of valid parentheses, otherwise 
// print "unbalanced" (without quotes)

// Sample Input 0

// (((((((((())))))))))
// Sample Output 0

// balanced
// Sample Input 1

// [one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]
// Sample Output 1

// balanced
// Sample Input 2

// {{)[](}}
// Sample Output 2

// unbalanced


function processData(input) {
  //Enter your code here
  input = input.split("\n");

  var currentArray = input[0].split("");
  // console.log("currentArray", currentArray);
  var check = checkBalanced(currentArray);

  if (check) {
    console.log("balanced");
  } else {
    console.log("unbalanced");
  }
}

var checkBalanced = function (a) {
  var stack = [];

  for (var i = 0; i < a.length; i++) {
    if (a[i] === "{" || a[i] === "[" || a[i] === "(") {
      stack.push(a[i]);
    } else if (a[i] === "}" || a[i] === "]" || a[i] === ")") {
      if (stack.length !== 0) {
        var temp = stack.pop();

        if (
          (a[i] === ")" && temp !== "(") ||
          (a[i] === "}" && temp !== "{") ||
          (a[i] === "[" && temp !== "]")
        ) {
          return false;
        }
      } else {
        return false;
      }
    }
  }

  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
};
