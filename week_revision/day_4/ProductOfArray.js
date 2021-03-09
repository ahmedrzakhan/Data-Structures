// TC - O(N2) SC - O(N)
function runProgram(input) {
  input = input.trim().split("\n");

  for (let i = 1; i < input.length; i++) {
    let n = Number(input[i++]);
    // console.log("n", n);

    let arr = input[i].trim().split(" ").map(Number);
    // console.log("arr", arr);

    let result = getProduct(arr, n);
    console.log(...result);
  }
}

// const getProduct = (a, n) => {
//   let result = "";
//   for (let i = 0; i < n; i++) {
//     let prod = 1;
//     for (let j = 0; j < n; j++) {
//       if (i !== j) {
//         prod *= a[j];
//       }
//     }
//     result += prod + " ";
//   }
//   return result;
// };

const getProduct = (a, n) => {
  const L = [],
    R = [],
    result = [];
  (L[0] = 1), (R[n - 1] = 1);

  for (let i = 1; i < n; i++) {
    L[i] = a[i - 1] * L[i - 1];
  }
  // console.log("L", L);

  for (let i = n - 2; i >= 0; i--) {
    R[i] = a[i + 1] * R[i + 1];
  }
  // console.log("R", R);

  for (let i = 0; i < n; i++) {
    result[i] = L[i] * R[i];
  }

  return result;
};

runProgram("2\n5\n1 2 3 4 5\n3\n3 2 7");
