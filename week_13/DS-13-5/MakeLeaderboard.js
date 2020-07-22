// You are given name and marks of N different students in a hackerrank contest. Your 
// task is to write a program that makes leaderboard of the students under following conditions:

// If two students get same marks they get same rank

// The student placed next to the same marks students will get the rank skipping the intermediate ranks.

// Refer to the sample test case for better understanding

// Note : You cannot use built-in sort function. Using that can lead to disqualification. Write 
// your own sorting algorithm

// Input Format

// First line of input contains N Next N line contains name and marks respectively of N different 
// students (where name and marks is separated by a space)

// Constraints

// N < 100

// Output Format

// Output N names with their rank. Follow these rules for generating the list:

// The students having more mark gets better rank
// If students have similar mark, their rank will be same(In case of similar marks, the person 
//     whose name comes first in alphabetical order comes first in order. However their rank will 
// be same)
// The student placed next to the same marks students will get the rank skipping the intermediate ranks.
// Sample Input 0

// 6
// rancho 45
// chatur 32
// raju 30
// farhan 28
// virus 32
// joy 45
// Sample Output 0

// 1 joy
// 1 rancho
// 3 chatur
// 3 virus
// 5 raju
// 6 farhan

function processData(input) {
  //Enter your code here

  input = input.split("\n");

  const n = Number(input[0]);
  // console.log("n", n);

  const studentArr = [];

  for (let i = 1; i < input.length; i++) {
    let item = input[i].split(" ");

    let data = {
      name: item[0],
      marks: item[1],
    };

    studentArr.push(data);
  }
  // console.log("studentArr", studentArr);

  let mnSorted = bubbleSort(studentArr);
  // console.log("mnSorted", mnSorted);
  let rSorted = rankSort(mnSorted);
}

const bubbleSort =  (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j].marks < arr[j + 1].marks) {
        swap(arr, j, j + 1);
      }
      if (arr[j].marks === arr[j + 1].marks) {
        if (arr[j].name > arr[j + 1].name) {
          swap(arr, j, j + 1);
        }
      }
    }
  }
  // console.log("arr", arr);
  return arr;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

const rankSort = (arr) => {
  let rank = 1;

  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      console.log(`${rank} ${arr[i].name}`);
    } else if (arr[i].marks === arr[i - 1].marks) {
      console.log(`${rank} ${arr[i].name}`);
    } else {
      rank = i + 1;
      console.log(`${rank} ${arr[i].name}`);
    }
  }
};
