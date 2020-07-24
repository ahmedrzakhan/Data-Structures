// Given a string S of all lowercase letters and each letter has a value of its own. The
//  value of the alphabet 'a' is 1, and the value of all other alphabets is the value of
//  its previous alphabet + 1. Now you have to find the total value of the given string.

// Input Format

// The first and only line of input contains the String S.

// Constraints

// 1 <= Length of S <= 1000

// Output Format

// Print the string value

// Sample Input 0

// aba
// Sample Output 0

// 4
// Explanation 0

// For example, Consider the String aba

// Here, the first character a has a weight of 1, the second character b has 2 and the third
// character a again has a weight of 1. So the summation here is equal to : 1+2+1 = 4

function processData(input) {
  //Enter your code here

  let sum = 0,
    count = 1;
  // console.log(str);

  let weight = [];

  let chars = "abcdefghijklmnopqrstuvwxyz".split("");
  // console.log(chars);

  for (let i = 0; i < chars.length; i++) {
    weight.push(count++);
  }
  // console.log(weight);

  for (let i = 0; i < input.length; i++) {
    if (chars.indexOf(input[i]) !== -1) {
      sum = sum + weight[chars.indexOf(input[i])];
      console.log([chars.indexOf(input[i])]);
    }
  }
  console.log(sum);
}

processData("aba");
