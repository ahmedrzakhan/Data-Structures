// We do not like strings which have same consecutive letters. No one has any idea why it is so.

// We call these strings as Bad strings. So, Good strings are the strings which do not have
// same consecutive letters. Now, the problem is simple. Given a string S, you need to
// convert it into a Good String.

// Input Format

// The first line contains an integer T, denoting the number of test cases.

// Each test case consists of a string S, which consists of only lower case letters.

// Constraints

// 1 <= T <= 10

// 1 <= Length of string <= 30

// Output Format

// For each test case, print the answer to the given problem.

// The answer is the modified good string

// Sample Input 0

// 3
// abb
// aaab
// ababa
// Sample Output 0

// ab
// ab
// ababa
// Explanation 0

// In the first case, S = "abb". Since, S has same consecutive letter 'b' we will delete
//  one of them. So, the good string will be "ab".

// In the second case, S = "aaab" and since S has same consecutive letter 'a' we will delete
//  them one by one. aaab -> aab -> ab. So, the good string will be "ab".

// In the third case, S = "ababa" and S has no same consecutive letter. So, the good string
//  will be "ababa".

function processData(input) {
  //Enter your code here
  input = input.split("\n");

  var numberOfTestCases = Number(input[0]);
  // console.log("numberOfTestCases", numberOfTestCases);

  input.shift();

  // console.log("input", input);

  for (var i = 0; i < input.length; i++) {
    var str = input[i];

    var result = "";

    for (var j = 0; j < str.length; j++) {
      if (str[j] === str[j + 1]) {
        result = result + "";
        // console.log("str[j]", str[j]);
      } else {
        result = result + str[j];
      }
    }
    console.log(result);
  }
}

processData("3\nabb\naaab\nababa");
