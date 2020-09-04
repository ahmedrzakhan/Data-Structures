// O(logn)
function runProgram(input) {
    input = input.trim().split("\n");
  
    let N = Number(input[0]);
    //   console.log("N", N);
  
    let line = 2;
    let soldiers = [];
    for (let i = 1; i <= N; i++) {
      soldiers.push(Number(input[i].trim()));
      line++;
    }
  
    //   console.log("soldiers", soldiers);
    //   console.log("line", line);
  
    let Q = Number(input[N + 1].trim());
    //   console.log("Q", Q);
  
    let piyush = [];
  
    for (let i = 0; i < Q; i++) {
      piyush.push(Number(input[line++].trim()));
    }
  
    //   console.log("piyush", piyush);
  
      soldiers.sort((a, b) => a - b)
  
    let start = 0,
      end = soldiers.length - 1;
  
    for (let i = 0; i < piyush.length; i++) {
      let index = getUpperBound(piyush[i], soldiers, start, end, 0);
      // console.log(index);
  
      let output = getCount(index, soldiers);
      console.log(...output);
    }
  }
  
  const getCount = (index, arr) => {
    let sum = 0;
    for (let i = 0; i <= index; i++) {
      sum += arr[i];
    }
  
    return [index + 1, sum];
  };
  
  const getUpperBound = (k, arr, start, end, out) => {
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
      if (arr[mid] <= k) {
        out = mid;
        start = mid + 1;
      } else {
        end = mid - 1;
      }
    }
    return out;
  };