// You have the marks of students in the form of an array, where arr[i] represents 
// the marks of the ith student.

// Since you are a curious kid, you want to find all the marks that are not smaller 
// than those on its right side in the array.

// Input Format

// The first line of input will contain a single integer n denoting the number of students.

// The next line will contain n space separated integers representing the marks of students.

// Constraints

// 1 <= n <= 1000000

// 0 <= arr[i] <= 10000

// Output Format

// Output all the integers separated in the array from left to right that are not smaller than 
// those on its right side.

// Sample Input 0

// 6
// 16 17 4 3 5 2
// Sample Output 0

// 17 5 2
// Explanation 0

// 17, 5 and 2 are three integers present in the list which has no integers greater 
// than it to its right (all the integers present in right of it)

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  // console.log("input", input);

  input.shift();
  var result = "";

  var givenArray = input[0].split(" ").map(Number);
  // console.log("givenArray", givenArray);

  for (var i = 0; i < givenArray.length; i++) {
    var j;
    for (j = i + 1; j < givenArray.length; j++) {
      if (givenArray[i] < givenArray[j]) {
        break;
      }
    }
    if (j === givenArray.length) {
      result = result + givenArray[i] + " ";
    }
  }

  console.log(result);
}

processData("6\n16 17 4 3 5 2");
