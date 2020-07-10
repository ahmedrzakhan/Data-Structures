// A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

// Two brackets are considered to be a matched pair if the an opening bracket (i.e., (, [, 
//   or {) occurs to the left of a closing bracket (i.e., ), ], or }) of the exact same type. 
//   There are three types of matched pairs of brackets: [], {}, and ().

// A matching pair of brackets is not balanced if the set of brackets it encloses are not matched. 
// For example, {[(])} is not balanced because the contents in between { and } are not balanced. 
// The pair of square brackets encloses a single, unbalanced opening bracket, (, and the pair of
//    parentheses encloses a single, unbalanced closing square bracket, ].

// By this logic, we say a sequence of brackets is balanced if the following conditions are met:

// It contains no unmatched brackets.

// The subset of brackets enclosed within the confines of a matched pair of brackets is also a
//  matched pair of brackets.
// Given a string, you have to comment if it is balanced or not

// Input Format

// First line of input contains t which is the number of test cases present in the question

// Each test case has a string

// Constraints

// t < 100

// length of string < 100

// Output Format

// Print "balanced" if the string is balanced, otherwise print "not balanced" in case the string
//  is not balanced

// Sample Input 0

// 3
// {([])}
// ()
// ([]
// Sample Output 0

// balanced
// balanced
// not balanced


function processData(input) {
  //Enter your code here
  input = input.split("\n");
  var numberOfTestCases = Number(input[0]);

  for (var i = 1; i <= numberOfTestCases; i++) {
    var currentArray = input[i].split("");
    // console.log("currentArray", currentArray);
    var check = checkBalanced(currentArray);

    if (check) {
      console.log("balanced");
    } else {
      console.log("not balanced");
    }
  }
}

var checkBalanced = function (a) {
  var stack = [];

  for (var i = 0; i < a.length; i++) {
    if (a[i] === "{" || a[i] === "[" || a[i] === "(") {
      stack.push(a[i]);
    } else {
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
