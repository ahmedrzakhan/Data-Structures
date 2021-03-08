// TC - O(N2) SC - O(N)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i++]);
    // console.log("n", n);

    let arr = input[i].trim().split(" ").map(Number);
    // console.log("arr", arr);

    let result = getProduct(arr, n);
    console.log(result);
  }
}

const getProduct = (a, n) => {
  let result = "";
  for (let i = 0; i < n; i++) {
    let prod = 1;
    for (let j = 0; j < n; j++) {
      if (i !== j) {
        prod *= a[j];
      }
    }
    result += prod + " ";
  }
  return result;
};

runProgram("2\n5\n1 2 3 4 5\n3\n3 2 7");
