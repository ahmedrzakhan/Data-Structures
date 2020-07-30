// Consider a staircase of size :

//    #
//   ##
//  ###
// ####
// Observe that its base and height are both equal to , and the image is
// drawn using # symbols and spaces. The last line is not preceded by any spaces.

// Write a program that prints a staircase of size .

// Function Description

// Complete the staircase function in the editor below. It should print a staircase
// as described above.

// staircase has the following parameter(s):

// n: an integer
// Input Format

// A single integer, , denoting the size of the staircase.

// Constraints

//  .

// Output Format

// Print a staircase of size  using # symbols and spaces.

// Note: The last line must have  spaces in it.

// Sample Input

// 6
// Sample Output

//      #
//     ##
//    ###
//   ####
//  #####
// ######
// Explanation

// The staircase is right-aligned, composed of # symbols and spaces, and has a height and width of .

function staircase(n) {
  var patternArray = [];

  for (var i = 0; i < n; i++) {
    for (var j = 0; j < n; j++) {
      // console.log(i, j)
      if (i + j >= n - 1) {
        patternArray[j] = "#";
      } else {
        patternArray[j] = " ";
      }
    }
    console.log(patternArray.join(""));
  }
}
