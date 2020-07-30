// Problem
// Submissions
// Leaderboard
// Discussions
// Electricity consumption is measured via slab rates for a particular wattage capacity,
// which is as follows

// unitsConsumed pricePerUnit
// 0 - 50      3
// 51 - 150    5
// 150 and above    10
// image

// Apart from the slab rates, a fixed charge of Rs. 80 is also added to every bill.

// Given the bill, write a program to find the number of units consumed.

// Input Format

// First and the only line of input contains the bill amount

// Constraints

// Bill amount is an integer <= 1000

// Output Format

// Output the number of units consumed

// Sample Input 0

// 930
// Sample Output 0

// 170

function processData(input) {
  //Enter your code here
  bill = input;
  bill = bill - 80;
  // console.log(bill);

  var unitsConsumed;
  if (bill <= 150) {
    unitsConsumed = bill / 3;
  } else if (bill > 150 && bill <= 650) {
    unitsConsumed = 50 + (bill - 150) / 5;
  } else {
    unitsConsumed = 50 + 100 + (bill - 650) / 10;
  }

  console.log(unitsConsumed);
}
