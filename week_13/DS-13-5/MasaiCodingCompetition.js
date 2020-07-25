// There is a coding Tournament where 4 clubs are going to compete. Since the team 
// selection is very critical in this competition,Rohit asked Harshit to help him in 
// the team selection process.

// There is a long queue of students from four clubs. Each student of a club have a 
// different roll number. Whenever a new student will come, he will search for his 
// clubmate from the end of the queue. As soon as he will find any of the club-mate 
// in the queue, he will stand behind him, otherwise he will stand at the end of the
//  queue. At any moment Harshit will ask the student, who is standing in front of the
//   queue, to come and give his name and Harshit will remove him from the queue. There
//    are Q operations of one of the following types:

// E a b: A new student of club a whose roll number is b will stand in queue according 
// to the method mentioned above.

// D: Harshit will ask the student, who is standing in front of the queue, to come and 
// put his name and Harshit will remove him from the queue

// Input Format

// First line contains an integer Q denoting the number of operations.

// Next Q lines will contains one of the 2 types of operations.

// Constraints

// Number of dequeue operations will never be greater than enqueue operations at any point of time.

// 1<=Q<=100000

// 1<=a<=4

// 1<=b<=50000

// Output Format

// For each 2nd (D) type of operation, print two space separated integers, the front 
// student's club and roll number.

// Sample Input 0

// 5
// E 1 1
// E 2 1
// E 1 2
// D
// D
// Sample Output 0

// 1 1
// 1 2

function processData(input) {
  //Enter your code here
  input = input.split("\n");
  // console.log("input", input);

  let tcs = Number(input[0]);
  // console.log("tcs", tcs);

  let master = [],
    A = [],
    B = [],
    C = [],
    D = [];
  let flagA = true,
    flagB = true,
    flagC = true,
    flagD = true;
  let flags = {
    A: flagA,
    B: flagB,
    C: flagC,
    D: flagD,
  };
  let clubs = {
    A: A,
    B: B,
    C: C,
    D: D,
  };

  for (let i = 1; i <= tcs; i++) {
    let currentArray = input[i].split(" ");
    // console.log("currentArray", currentArray);
    check(currentArray, master, flags, clubs);
  }
}

const check = (arr, master, flags, clubs) => {
  // console.log("arr", arr);

  if (arr[0] === "E") {
    if (arr[1] === "1") {
      if (flags.A) {
        master.push(1);
        flags.A = false;
      }
      clubs.A.push(arr[2]);
    } else if (arr[1] === "2") {
      if (flags.B) {
        master.push(2);
        flags.B = false;
      }
      clubs.B.push(arr[2]);
    } else if (arr[1] === "3") {
      if (flags.C) {
        master.push(3);
        flags.C = false;
      }
      clubs.C.push(arr[2]);
    } else if (arr[1] === "4") {
      if (flags.D) {
        master.push(4);
        flags.D = false;
      }
      clubs.D.push(arr[2]);
    }
  } else {
    if (master[0] === 1) {
      console.log(1, Number(clubs.A.shift()));
    } else if (master[0] === 2) {
      console.log(2, Number(clubs.B.shift()));
    } else if (master[0] === 3) {
      console.log(3, Number(clubs.C.shift()));
    } else if (master[0] === 4) {
      console.log(4, Number(clubs.D.shift()));
    }
  }

  if (clubs.A.length === 0 && master[0] === 1) {
    master.shift();
    flags.A = true;
  } else if (clubs.B.length === 0 && master[0] === 2) {
    master.shift();
    flags.B = true;
  } else if (clubs.C.length === 0 && master[0] === 3) {
    master.shift();
    flags.C = true;
  } else if (clubs.D.length === 0 && master[0] === 4) {
    master.shift();
    flags.D = true;
  }

  // console.log(master, clubs, flags);
};

processData("5\nE 1 1\nE 2 1\nE 1 2\nD\nD")