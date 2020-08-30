// Minimum Platforms Required
// Description

// Given arrival and departure times of all trains that reach a railway station,
//  the task is to find the minimum number of platforms required for the railway
//   station so that no train waits.


// Input
// Input Format:

// First-line contains a number of trains n

// Second-line contains array containing arrival time of n trains

// The third line contains an array containing departure time of n trains

// Constraints:

// n <= 100


// Output
// Output one number which is the minimum number of platforms required


// Sample Input 1 

// 6
// 9:00 9:40 9:50 11:00 15:00 18:00
// 9:10 12:00 11:20 11:30 19:00 20:00
// Sample Output 1

// 3

function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  let arrival = input[1]
      .trim()
      .split(" ")
      .map((ele) => Number(ele.split(":").join("")))
      .sort((a, b) => a - b),
    departure = input[2]
      .trim()
      .split(" ")
      .map((ele) => Number(ele.split(":").join("")))
      .sort((a, b) => a - b);

  // console.log("arrival", arrival);
  // console.log("departure", departure)


  let count = 1, i = 0, j = 1;
  
  while ( i < n && j < n ) {
    if ( arrival[j] <= departure[i] ) {
      // console.log("arrival[j] <= departure[i]", arrival[j] , departure[i])
      count++;
      j++;
    } else {
      // console.log("arrival[j] not less = departure[i]", arrival[j] , departure[i])
      i++;
      j++
    }
  }
  console.log(count)
}

runProgram(
  "6\n9:00 9:40 9:50 11:00 15:00 18:00\n9:10 12:00 11:20 11:30 19:00 20:00"
);
