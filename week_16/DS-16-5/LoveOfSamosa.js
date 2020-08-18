// Love of Samosa
// Description
// Amit went down to the Samosa street to have some. But he only has K units of money with
// him. There are N shops on the street and unfortunately, all of them have only one samosa
// remaining. You are also given an array A, where Ai is the cost of a samosa on the i'th shop.

// Find the maximum samosas that Amit can eat.

// Input
// Input Format
// First line contains two space-separated integers N and K.
// Second line contains N space separated integers, the cost of a samosa on the shops.
// Output Format
// 1 ≤ N ≤ 1000
// 0 ≤ K ≤ 1000
// 0 ≤ Ai ≤ 100

// Output
// Output Format

// Print the required answer
// Sample Input 1

// 4 10
// 5 4 2 4
// Sample Output 1

// 3

function runProgram(input) {
  input = input.split("\n");

  let [n, money] = input[0].split(" ").map(Number);
  //   console.log("n, money", n, money);

  let arr = input[1].split(" ").map(Number);
  //   console.log("arr", arr);

  let start = 0,
    end = arr.length - 1;

  let sorted = quickSort(arr, start, end);
  //   console.log(sorted);

  let sum = 0, last;
  for (let i = 0; i < sorted.length; i++) {
    if (sum < money) {
      sum = sum + sorted[i];
      last = i;
    }
  }
  //   console.log("sum", sum);
  if (sum > money) {
    console.log(last);
  } else {
    console.log(last + 1);
  }
}

const quickSort = (arr, start, end) => {
  if (start < end) {
    let index = partition(arr, start, end);
    quickSort(arr, start, index - 1);
    quickSort(arr, index + 1, end);
  }

  return arr;
};

const partition = (arr, low, high) => {
  let i = low,
    j = high,
    pivot = arr[high];

  while (i < j) {
    while (arr[j] >= pivot && j > 0) {
      j--;
    }
    while (arr[i] < pivot && i < high) {
      i++;
    }

    if (i < j) {
      swap(arr, i, j);
    }
  }
  swap(arr, i, high);

  return i;
};

const swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

runProgram("4 13\n5 4 2 4");
