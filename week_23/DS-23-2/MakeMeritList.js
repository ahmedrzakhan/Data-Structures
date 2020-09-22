// Make Merit list
// Description

// From a college, a group of students applied for 8 positions in the Indian
//  army. Each student will be chosen based on the following criteria:

// - Every student has the following 4 details Name, Height, Weight and IQ in
// the same order.

// - IQ is the first priority to choose a particular student , if a student has
// IQ of 115 and other student has 110 ,print first the name of student having
//  greater IQ .

// - If any two students IQ is same then print the student name having greater height
//  if the heights are also same then print the student name having lesser weight.

// - If all of these details(height,weight,IQ) are same then first print the
// lexicographically smaller name.

// You have to prepare top 8 students  merit list bases on the above criteria.

// Note : You cannot use built-in sort function. Using that can lead to disqualification.
//  Write your own sorting algorithm.

// Input
// Input Format

// First line contains N number of students applied.

// Following N line contains Name, Height, Weight ,IQ of each student separated by spaces.

// Constraints

// 8 <= N <= 20

// Output
// Output Format

// Print each student's name in the merit list.

// Sample Input 1

// 10
// jack 158 85 112
// john 168 74 124
// arti 148 65 120
// bhuvan 182 84 124
// navi 182 84 124
// vijay 175 88 115
// amit 180 89 119
// kevin 182 77 120
// rohit 174 85 100
// vivek 184 75 111

// Sample Output 1

// bhuvan
// navi
// john
// kevin
// arti
// amit
// vijay
// jack

function runProgram(input) {
  input = input.trim().split("\n");

  let n = Number(input[0]);
  //   console.log("n", n);

  let arr = [];
  for (let i = 1; i <= n; i++) {
    // console.log("input[i]", input[i]);
    let item = input[i].split(" ");
    let obj = {
      name: item[0],
      height: item[1],
      weight: item[2],
      iq: item[3],
    };

    arr.push(obj);
  }

  //   console.log("arr", arr);

  const sorted = arr.sort(customSort);
  //   console.log("sorted", sorted);
  for (let i = 0; i < 8; i++) {
    console.log(sorted[i].name);
  }
}

const customSort = (a, b) => {
  if (a.iq < b.iq) {
    return 1;
  } else if (a.iq > b.iq) {
    return -1;
  } else if (a.iq === b.iq) {
    if (a.height < b.height) {
      return 1;
    } else if (a.height > b.height) {
      return -1;
    } else if (a.height === b.height) {
      if (a.weight < b.weight) {
        return -1;
      } else if (a.weight > b.weight) {
        return 1;
      } else if (a.weight === b.weight) {
        if (a.name < b.name) {
          return -1;
        } else if (a.name > b.name) {
          return 1;
        }
      }
    }
  }
};

runProgram(
  "10\njack 158 85 112\njohn 168 74 124\narti 148 65 120\nbhuvan 182 84 124\nnavi 182 84 124\nvijay 175 88 115\namit 180 89 119\nkevin 182 77 120\nrohit 174 85 100\nvivek 184 75 111"
);

// runProgram(
//   "6\njack 158 85 112\njohn 168 74 124\narti 148 65 120\nbhuvan 182 84 124\nnavi 182 84 124\nvijay 175 88 115"
// );
