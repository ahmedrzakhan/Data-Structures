// Lauren has a chart of distinct projected prices for a house over the next 
// several years. She must buy the house in one year and sell it in another, 
// and she must do so at a loss. She wants to minimize her financial loss.

// For example, the house is valued at  over the next  years. She can purchase the 
// home in any year, but she must resell the house at a loss in one of the following
//  years. Her minimum loss would be incurred by purchasing in year  at  and resel
//  ling in year  at .

// Find and print the minimum amount of money Lauren must lose if she buys the house 
// and resells it within the next  years.

// Note: It's guaranteed that a valid answer exists.

// Function Description

// Complete the minimumLoss function in the editor below. It should return an integer 
// that represents the minimum loss that can be achieved.

// minimumLoss has the following parameter(s):

// price: an array of integers that represent prices at each year
// Input Format

// The first line contains an integer , the number of years of house data.
// The second line contains  space-separated long integers describing each .

// Constraints

// All the prices are distinct.
// A valid answer exists.
// Subtasks

//  for  of the maximum score.
// Output Format

// Print a single integer denoting the minimum amount of money Lauren must lose if she 
// buys and resells the house within the next  years.

// Sample Input 0

// 3
// 5 10 3
// Sample Output 0

// 2
// Explanation 0

// Lauren buys the house in year  at  and sells it in year  at  for a minimal loss of .

// Sample Input 1

// 5
// 20 7 8 2 5
// Sample Output 1

// 2
// Explanation 1

// Lauren buys the house in year  at  and sells it in year  at  for a minimal loss of .

// TC_0(N) SC_0(N)
function minimumLoss(price) {
  let arr = Array.from(price);
  price.sort((a, b) => b - a);
  console.log(arr);
  console.log(price);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < price.length - 1; i++) {
    let val = price[i] - price[i + 1];

    if (val < min) {
      if (arr.indexOf(price[i]) < arr.indexOf(price[i + 1])) {
        min = price[i] - price[i + 1];
      }
    }
  }
  console.log(min);
  return min;
}

minimumLoss([5, 10, 3]);
