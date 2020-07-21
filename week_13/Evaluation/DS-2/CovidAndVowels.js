// Given a string S, find the number of substrings which contains all the vowels
//  present in "coronavirus" .

// Input Format

// Single line consists of string S

// Constraints

// Length of S <=100

// Output Format

// Print count of substrings in a single line

// Sample Input 0

// dangerouscovid
// Sample Output 0

// 4
// Explanation 0

// Out of all possible substrings following 4 substrings have all vowels [a,i,o,u]

// dangerouscovi

// dangerouscovid

// angerouscovi

// angerouscovid

function processData(input) {
  //Enter your code here
  let n = input.length,
    count = 0;

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j <= n; j++) {
      let str = input.substring(i, j);
      // console.log("str", str);
      count = count + checkCount(str, count);
    }
  }
  console.log(count);
}

const checkCount = function (s) {
  let obj = {};
  let c = 0;
  // console.log(s);
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]]) {
      obj[s[i]]++;
    } else {
      obj[s[i]] = 1;
    }
  }

  // console.log(obj);

  if (obj["a"] && obj["i"] && obj["o"] && obj["u"]) {
    // console.log("ppp")
    // console.log("s", s);
    c++;
  }

  return c;
};
