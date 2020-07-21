// Given a string of both uppercase and lowercase alphabets, the task is to print the string
// with alternate occurrences of any character dropped(including space and consider
// upper and lowercase as same).

// Input Format

// Single line consists of String S.

// Constraints

// 1<= String Length<=100

// Output Format

// Single line output, print the updated string.

// Sample Input 0

// A Transformation in Education!
// Sample Output 0

// A Trnsfomain Eductio!
// Explanation 0

// Print first "A" and then ignore next "a",print first "r" and then ignore
//  next "r" Similarly print first space then ignore next space. and so on.

function processData(input) {
  //Enter your code here

  let obj = {};
  let result = "";

  for (let i = 0; i < input.length; i++) {
    if (obj[input[i].toLowerCase()]) {
      if (obj[input[i]] % 2 === 0) {
        result = result + input[i];
      }
      obj[input[i].toLowerCase()]++;
    } else {
      obj[input[i].toLowerCase()] = 1;
      result = result + input[i];
    }
  }

  // console.log("obj", obj)
  console.log(result);

  // console.log(input[0].toLowerCase());
}

processData("A Transformation in Education!");
