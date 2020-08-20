// Party or Not
// Description

// Ashutosh has N friends and he wants to give a party to his C friends on his birthday. 
// Ashutosh knows the amount he will have to spend on each of his N friends in party. Given
//  the expense amount of each of the N friends, comment if it is possible for Ashutosh to
//   give a party to his C friends if he has just R rupees.

// Input
// Input Method
// First line contains three space separated integers: N, C and R respectively
// Second line contains N space separated integers which represents the amount he needs to 
// spend on each of his N friends.
// Constraints
// N <= 1000
// C is lesser than N
// R < 10000

// Output
// Output Method

// If it is possible to give party to C friends, print "Party"
// Else print "Sad".

// Sample Input 1 

// 5 3 24
// 6 4 21 20 13
// Sample Output 1

// Party
// Hint

// Sample 1 Explanation


function runProgram(input) {
  input = input.split("\n");

  let [n, c, r] = input[0].split(" ").map(Number);
//   console.log("n, c, r", n, c, r);

  let arr = input[1].split(" ").map(Number);
//   console.log("arr", arr);

  const sorted = arr.sort((a, b) => {
    return a - b;
  });
//   console.log("sorted", sorted);

  let sum = 0,
    last;
  for (let i = 0; i < sorted.length; i++) {
    if (sum < r) {
      sum += sorted[i];
      last = i;
    }
  }

//   console.log("sum", sum);
//   console.log("last", last);

  if (sum > r) {
    last = last - 1;
  }

//   console.log("last", last);

  if (last + 1 === c) {
    console.log("Party");
  } else {
    console.log("Sad");
  }
}

runProgram("5 3 24\n6 6 21 20 13");
