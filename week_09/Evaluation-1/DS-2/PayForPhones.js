// You are given prices of 4 different mobile phones and also provided with the number of
// each of the phones that you need to buy.

// You have with you 150000 units of money. Comment if it is possible to buy those phones
// or not.

// Input Format

// First line contains 4 space separated positive values which are prices of the 4 mobile
//  phones respectively.

// Second line contains the quantity/count of each mobile phones that you need to buy

// Constraints

// price of each phone < 100000

// Output Format

// Output "Possible" (without quotes) if it is possible to buy desired numbers of mobile phones.

// Else in all other case, print "Not Possible" (without quotes)

// Sample Input 0

// 10000 20000 15000 5000
// 2 3 4 3
// Sample Output 0

// Not Possible

function processData(input) {
  //Enter your code here
  input = input.split("\n");

  var firstArray = input[0].split(" ").map(Number);
  var secondArray = input[1].split(" ").map(Number);

  // console.log("firstArray", firstArray);
  // console.log("secondArray", secondArray);

  var total =
    firstArray[0] * secondArray[0] +
    firstArray[1] * secondArray[1] +
    firstArray[2] * secondArray[2] +
    firstArray[3] * secondArray[3];

  // console.log(total);

  if (total > 150000) {
    console.log("Not Possible");
  } else {
    console.log("Possible");
  }
}
