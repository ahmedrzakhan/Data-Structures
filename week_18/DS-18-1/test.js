function runProgram(input) {
  input = input.trim().split("\n");

  const arr = [];

  for (let i = 1; i < input.length; i++) {
    let item = input[i].split(" ");

    let data = {
      name: item[0],
      marks: item[1],
    };

    arr.push(data);
  }

//   console.log("arr", arr);

  let sorted = getSorted(arr);
//   console.log("sorted", sorted);

  let rank = 1;
  for (let i = 0; i < sorted.length; i++) {
    if (i === 0) {
      console.log(`${rank} ${sorted[i].name}`);
    } else if (sorted[i].marks === sorted[i - 1].marks) {
      console.log(`${rank} ${sorted[i].name}`);
    } else {
      rank = i + 1;
      console.log(`${rank} ${sorted[i].name}`);
    }
  }
}

// return b.marks - a.marks;
const getSorted = (arr) => {
  let sort = arr.sort((a, b) => {
    if (a.marks > b.marks) {
      return -1;
    } else if (a.marks < b.marks) {
      return 1;
    }
  });

  return sort;
};

const customSort = (a, b) => {
  a[1] = Number(a[1]);
  b[1] = Number(b[1]);

  if (b[1] > a[1]) {
    return 1;
  } else if (b[1] < a[1]) {
    return -1;
  } else if (b[1] === a[1]) {
    if (b[0] < a[0]) {
      return 1;
    } else {
      return -1;
    }
  }
};
runProgram("6\nrancho 45\nchatur 32\nraju 30\nfarhan 28\nvirus 32\njoy 45");
