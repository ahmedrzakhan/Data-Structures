function runProgram(input) {
    input = input.split("\n");
  
    let len = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
  
    //   console.log("len, arr", len, arr);
  
    const result = bubbleSort(arr, len);
    console.log(...result);
  }
  
  const bubbleSort = (arr, n) => {
    if (n === 1) {
      return arr;
    } else {
      arr = getSwapped(arr, n, 0);
      return bubbleSort(arr, n - 1);
    }
  };
  
  const getSwapped = (arr, n, j) => {
    if (j < n - 1) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
      return getSwapped(arr, n, j + 1);
    }
    return arr;
  };
  
  const swap = (arr, i, j) => {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  };
  
  runProgram("5\n3 5 0 9 8");
  