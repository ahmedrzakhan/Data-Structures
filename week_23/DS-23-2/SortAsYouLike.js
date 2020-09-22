// Sort As you like
// Description

// Mike is more of a why? person. Once he got a doubt why alphabets are in that 
// order a before b, b before c, c before d and so on...why not some other sequence.
//  So he started experimenting on alphabets. He came up with some sequences, he gave 
//  a sequence Q and a string  S  to his friend and asked him to sort the given string 
//  S  taking the given sequence Q as a reference.

// Input
// Input Format

// The first line contains T denoting the number of test cases.

// Each test case consists of two lines.

// The first line contains the sequence Q indicating the relative ordering of alphabets 
// and the second line contains the string S to be sorted.

// Constraints

// 1 <= T <= 10

// length of Q = 26

// 1 <= S <= 10^5

// Output
// Print T lines where each line contains the sorted string.

// Sample Input 1 

// 2
// wcyuogmlrdfphitxjakqvzbnes
// jcdokai
// miruqopsxthzdcnvkfbglwayje
// wgfsyvno
// Sample Output 1

// codijak
// osnvfgwy

// TC - O (N+M)
function runProgram(input) {
  input = input.trim().split("\n");

  let tcs = Number(input[0].trim());
  //   console.log("tcs", tcs);
  let line = 1;
  for (let i = 1; i <= tcs; i++) {
    let Q = input[line++].trim().split("");
    // console.log("Q", Q);

    let S = input[line++].trim().split("");
    // console.log("S", S);

    const result = getSorted(Q, S);
    console.log(result.join(""));
  }
}

const getSorted = (Q, S) => {
  let obj = {};
  for (let i = 0; i < Q.length; i++) {
    obj[Q[i]] = i + 1;
  }
  //   console.log("obj", obj);

  const customSort = (a, b) => {
    if (obj[a] < obj[b]) {
      return -1;
    } else if (obj[a] > obj[b]) {
      return 1;
    }
  };

  const sorted = S.sort(customSort);
  //   console.log(sorted);

  return sorted;
};

runProgram(
  "2\nwcyuogmlrdfphitxjakqvzbnes\njcdokai\nmiruqopsxthzdcnvkfbglwayje\nwgfsyvno"
);
