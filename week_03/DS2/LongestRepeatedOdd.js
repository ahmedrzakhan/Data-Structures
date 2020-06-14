// You are given an array A of N integers. Your task is to find the maximum number of times an odd number is continuously repeated in the array.

// Input Format

// First line contains N which is the number of element present in the array.

// Second line contains N integers which are the values of array.

// Constraints

// N<100

// Output Format

// Output one integer which the maximum number of times an odd number is repeated in array.

// Sample Input 0

// 12
// 1 1 1 1 2 2 2 2 2 1 1 1
// Sample Output 0

// 4
// Explanation 0

// 1 is repeated 4 times from index 0 to index 3 => 4 times

// 2 is repeated 5 times from index 4 to index 8 => 5 times

// 1 is repeated 3 times from index 9 to index 11 => 3 times

// So, the output is 4 since 1 is odd.

function processData(input) {
  var answer = 0,
    i = 0;
  //Enter your code here
  string1 = input.split("\n");

  numberOfElements = Number(string1[0]);

  individualElements = string1[1].split(" ");

  lengthOfIndividualElements = Number(individualElements.length);

  while (i < lengthOfIndividualElements) {
    current = individualElements[i];
    // console.log('current', current);
    var cnt = 0;

    if (current % 2 === 1) {
      // console.log('current odd', current);
      cnt += 1;
      var j = i + 1;

      while (j < lengthOfIndividualElements) {
        if (individualElements[j] === current) {
          cnt += 1;
          j += 1;
          // console.log('cnt', cnt);
        } else {
          answer = Math.max(answer, cnt);
          i = j;
          break;
        }
        answer = Math.max(answer, cnt);
      }
    }

    i++;
  }

  console.log(answer);
}

processData("6\n1 2 3 4 5 6");
