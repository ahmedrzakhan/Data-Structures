// Tom and Nick are good friends.Once Tom asked Nick exactly N rupees ,but Nick has only 1 
// rupee in his bank account. Nick wants to help his friend so he wrote two hacks First hack 
// can multiply the amount of money he owns by 10,while the second can multiply it by 20. 
// These hacks can be used any number of times.Can Nick help Tom with his hacks?

// Input Format

// The first line of the input contains a single integer T denoting the number of test cases.

// The description of T test cases follows.The first and only line of each test case contains
//  a single integer N.

// Constraints

// 1 <= T <= 100

// 1 <= N <= 10^12

// Output Format

// For each test case, print a single line containing the string "Yes" if you can make exactly 
// N rupees or "No" otherwise.

// Sample Input 0

// 5
// 1
// 2
// 10
// 25
// 200
// Sample Output 0

// Yes
// No
// Yes
// No
// Yes
// Explanation 0

// In the last case Nick can get Rs. 200 by first using 10x hack and then using 20x hack once.

// 1 -> 10 -> 200


function processData(input) {
  //Enter your code here
  input = input.split("\n");

  let n = Number(input[0]);
  let balance = 1;
  for (let i = 1; i <= n; i++) {
    let val = Number(input[i]);
    let result = hack(balance, val);
    if (result) {
      console.log("Yes");
    } else {
      console.log("No");
    }
  }
}

const hack = (b, val) => {
  if (b === val) {
    return true;
  }

  if (b > val) {
    return false;
  }

  return hack(b * 10, val) || hack(b * 20, val);
};
