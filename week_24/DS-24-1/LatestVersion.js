// Latest Version
// Description

// There is a software product and it has a version number N to identify the 
// unique state of it.  The version number is a string in which numbers are 
// separated by dots looks like this a.b.c.d.

// In this problem we are given two version numbers, we need to compare them and 
// conclude which one is the latest version number (that is which version number 
//   is smaller).  If version 1 is smaller than version 2 print "Version 1 is the 
//    latest.",  if  version 2 is smaller than version 1 print "Version 2 is the 
//    latest." if both are equal print "Both Versions are equal."

// Input
// Input Format

// Two version numbers are given in two lines.

// Constraints

// 1 <= N <= 1000


// Output
// Print output string.

// Sample Input 1 

// 1.0.33
// 1.0.21
// Sample Output 1

// Version 2 is the latest.

// TC (O(N))
function runProgram(input) {
  input = input.trim().split("\n");

  let a = input[0].trim().split(".").map(Number);
  //   console.log("a", a);

  let b = input[1].trim().split(".").map(Number);
  //   console.log("b", b);

  const check = checkVersions(a, b);
  // console.log(check);

  if (check === 2) {
    console.log("Version 2 is the latest.");
  } else if (check === 1) {
    console.log("Version 1 is the latest.");
  } else if (check === 0) {
    console.log("Both Versions are equal.");
  }
}

const checkVersions = (a, b) => {
  let n = Math.min(a.length, b.length);

  for (let i = 0; i < n; i++) {
    if (a[i] > b[i]) {
      return 2;
    } else if (a[i] < b[i]) {
      return 1;
    }
  }

  if (a.length > b.length) {
    return 2;
  } else if (a.length < b.length) {
    return 1;
  }

  return 0;
};

runProgram("1.0.21.1\n1.0.21.1");
// runProgram("1.2.3.4\n1.2.3.4");
// runProgram("2.1.11\n2.1.01");
