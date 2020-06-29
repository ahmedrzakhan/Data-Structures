// There are N different students who have messaged Rahul their doubts. Rahul can 
// reply to just one of them. Every student has a devotion quotient that determines 
// how devoted the student is towards the course. Help Rahul determine the name of 
// student to whom he should reply.

// Input Format

// First line of input contains the value of N

// Next N line contains name and devotion quotient of N students separated by a space

// Constraints

// N < 100

// name contains only lowercase alphabets [a-z]

// Output Format

// output one name which is the name of student with highest devotion quotient

// Sample Input 0

// 4
// ankit 10
// amit 40
// shivam 25
// shubham 33
// Sample Output 0

// amit

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  // console.log("input", input);

  var maxVal = -9999999;
  var highest = "Am";

  for (var i = 1; i < input.length; i++) {
    var currentArray = input[i].split(" ");
    // console.log("currentArray", currentArray);

    if (Number(currentArray[1]) > maxVal) {
      highest = currentArray[0];
      maxVal = Number(currentArray[1]);
      // console.log("currentArray", currentArray)
    }
  }

  console.log(highest);
}
