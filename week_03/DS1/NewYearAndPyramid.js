// You have decided to build a pyramid of stones on this new year. The simple rule
// is that the top level of the pyramid must consist of 1 stone, the second level must
//  consist of 1 + 2 = 3 stones, the third level must have 1 + 2 + 3 = 6 stones, and so on.

// Effectively, the i-th level of the pyramid contains 1 + 2 + ... + (i - 1) + i stones.

// You have got n stones and have to build a pyramid from them.

// Team Masai wants to know what is the maximum height of the pyramid that you can
// make using the given stones.

// Input Format

// The first line contains integer n.

// Constraints

// n <= 10000

// Output Format

// Print the maximum possible height of the pyramid.

// Sample Input 0

// 25
// Sample Output 0

// 4

function processData(input) {
  var requiredStones = 0,
    level = 0;
  //Enter your code here
  input = Number(input);
  // console.log('input', input);

  var numberOfStones = input;

  while (requiredStones <= numberOfStones) {
    level = level + 1;

    requiredStones = requiredStones + level * ((level + 1) / 2);
    // console.log('requiredStones', requiredStones);

    // console.log(level);
  }
  // console.log(requiredStones);
  //     console.log(level);

  if (requiredStones > numberOfStones) {
    level = level - 1;
    console.log(level);
  } else {
    console.log(level);
  }
}

processData("45");
