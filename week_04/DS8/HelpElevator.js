// You are programming an elevator that allows only persons with weight less than 85 to enter it, otherwise it beeps. You are provided weight of n persons in form of an array. Your task is to print either Beep or Enter depending on weight of person.

// Effectively, write a program that iterates through an array of n elements and prints "Beep" (without quote) in a new line if weight is greater than or equal to 85, otherwise print "Enter" (without quote).

// Input Format

// First line contains N which is the number of elements present in the array.

// Second line contains N space separated integers.

// Constraints

// N<100

// Output Format

// Output N strings (either Beep or Enter depending on the value present)

// Sample Input 0

// 5
// 24 83 89 43 91
// Sample Output 0

// Enter
// Enter
// Beep
// Enter
// Beep

function processData(input) {
  //Enter your code here
  // console.log('input', input);
  // console.log('typeof input', typeof input);

  array1 = input.split("\n");
  // console.log('array1', array1);
  // console.log('typeof array1', typeof array1);

  totalPeople = Number(array1[0]);
  // console.log('totalPeople', totalPeople);
  // console.log('typeof totalPeople', typeof totalPeople);

  individuals = array1[1].split(" ").map(function (element) {
    return Number(element);
  });
  // console.log('individuals', individuals);
  // console.log('individuals', typeof individuals);
  // console.log('individuals[0]', individuals[0]);
  // console.log('typeof individuals[0]', typeof individuals[0]);

  for (index = 0; index < totalPeople; index++) {
    if (individuals[index] < 85) {
      console.log("Enter");
    } else {
      console.log("Beep");
    }
  }
}
