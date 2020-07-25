// Mr.Robot needs an encryption method, so Elliott was there to help him. At the same time
//  Richard wrote a paper on encryption. Elliott then started writing his algortihms with 
//  the help of paper from Richard but he needs your help in implementing.The algorithm is 
//  like this:

// Given a input string, the encrypted string will start with the middle character of the 
// string and will be formed henceforth with the middle characters of the left and right 
// substrings (of the middle character of the word) and so on.Take a look at the explanation
//  of the sample test case for better understanding.
// Input Format

// INPUT:

// The first line contains an integer **T** denoting the number of TEST CASES. Each TEST
//  CASE consists of 2 lines. The first line contains an integer **N** denoting the length 
//  of the word that needs to be encrypted. The second line contains the word that needs to
//   be encrypted. 
// Constraints

// 1 <= T <= 10

// 1 <= Length of the string <= 10000

// Output Format

// OUTPUT :

// N lines where each line will contain the encrypted words
// Sample Input 0

// 2
// 3
// abc
// 4
// abcd
// Sample Output 0

// bac
// bacd
// Explanation 0

// In Test Case 2: The word was "abcd"

// Middle character of this word is 'b'

// Left Substring of 'b' is "a"

// Right Substring of 'b' is "cd"

// Middle Character of Left Substring of 'b' is 'a'

// Middle Character of Right Substring of 'b' is 'c'

// There are no other Left Substring for the 'c' in the right substring of 'b'

// Right Substring of 'c' is "d"

// Middle Character of Right Substring of 'c' is 'd'

// There is no other Left or Right Substring of 'd', so we stop here and arrange the middle 
// characters as we have obtained :

// "bacd"


function processData(input) {
  //Enter your code here
  input = input.split("\n");
  // console.log("input", input);

  let tcs = Number(input[0]);
  // console.log("tcs", tcs);

  let line = 1;

  for (let i = 0; i < tcs; i++) {
    let n = Number(input[line++]);
    // console.log("line", line);
    // console.log("n", n);
    let str = input[line++];
    // console.log("str", str);
    let result = encryptIt(0, n - 1, str);
    console.log(result);
  }
}

const encryptIt = (left, right, str) => {
  if (left === right) {
    // console.log("left === right str", str[left]);
    return str[left];
  } else {
    if (left < right) {
      // console.log("str[left], str[right]", str[left], str[right]);
      // console.log("left, right", left, right);
      let mid = Math.floor((left + right) / 2);
      // console.log("mid", mid);
      // console.log("str[mid]", str[mid]);
      return (
        str[mid] +
        encryptIt(left, mid - 1, str) +
        encryptIt(mid + 1, right, str)
      );
    }
    // console.log("blank");
    return "";
  }
};
