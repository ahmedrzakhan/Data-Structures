function runProgram(input) {
  // Write code here
//   console.log("input", input);
  input = input.split("\n");

  let n = Number(input[0]);
//   console.log("n", n);

  let arr1 = input[1].split(" ").map(Number);
//   console.log("arr1", arr1);

  let arr2 = input[2].split(" ").map(Number);
//   console.log("arr2", arr2);

  let newArr = arr1.concat(arr2);
//   console.log("newArr", newArr);

  let result = bubbleSort(newArr);
  console.log(...result);
}

const bubbleSort = (arr) => {

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
};

const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
};

runProgram("4\n1 5 7 9\n2 4 6 8");
