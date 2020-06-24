// Patlu and Motu works in a building construction, they have to put some number
// of bricks N from one place to another, and started doing their work.

// They want to find who will put the last brick.

// They to follow a simple rule: - In the i'th round, Patlu puts i bricks whereas Motu
// puts ix2 bricks.

// There are only N bricks, you need to help find the challenge result to find who put
// the last brick.

// Input Format

// First line contains an integer N.

// Constraints

// 1 ≤ N ≤ 10000

// Output Format

// Output "Patlu" (without the quotes) if Patlu puts the last bricks ,"Motu"(without
//     the quotes) otherwise.

// Sample Input 0

// 13
// Sample Output 0

// Motu
// Explanation 0

// 13 bricks are there :

// Patlu Motu

// 1 2

// 2 4

// 3 1 ( Only 1 remains)

// Hence, Motu puts the last one.
function processData(input) {
  //Enter your code here

  var bricks = Number(input);
  // console.log(bricks, typeof bricks);

  var person = "Patlu";

  for (var i = 1; i <= bricks; i++) {
    bricks = bricks - i;

    if (bricks <= 0) {
      person = "Patlu";
      break;
    }

    bricks = bricks - 2 * i;

    if (bricks <= 0) {
      person = "Motu";
      break;
    }
  }

  console.log(person);
}

// -------------------------- 2nd Approach --------------------------------
function processData(input) {
  //Enter your code here

  var i = 1;
  var bricks = Number(input);

  while (bricks > 0) {
    //         Patlu Turn
    bricks = bricks - i;
    if (bricks <= 0) {
      console.log("Patlu");
      break;
    }

    //         Motu Turn
    bricks = bricks - 2 * i;
    if (bricks <= 0) {
      console.log("Motu");
      break;
    }
    i++;
  }
}
