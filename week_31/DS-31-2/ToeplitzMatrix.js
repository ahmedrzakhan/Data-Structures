// Toeplitz Matrix
// A Toeplitz matrix is a matrix where every left-to-right-descending
//  diagonal has the same element. Given a non-empty matrix arr, write
//  a function that returns true if and only if it is a Toeplitz matrix.
//   The matrix can be any dimensions, not necessarily square.

// For example,

// [[1,2,3,4],
//  [5,1,2,3],
//  [6,5,1,2]]
// is a Toeplitz matrix, so we should return true, while

// [[1,2,3,4],
//  [5,1,9,3],
//  [6,5,1,2]]
// isn’t a Toeplitz matrix, so we should return false.

function isToeplitz(arr) {
  // your code goes here
  let m = arr.length,
    n = arr[0].length;

    for (let col = 1; col < n - 1; col++) {
    for (let row = m - 1; row > 0; row--) {
      if (arr[row][col] !== arr[row - 1][col - 1]) {
        return false;
      }
    }
  }
  return true;
}

console.log(
  isToeplitz([
    [1, 2, 3, 4],
    [5, 1, 2, 3],
    [6, 5, 1, 2],
  ])
);

console.log(
  isToeplitz([
    [1, 2, 3, 4],
    [5, 1, 9, 3],
    [6, 5, 1, 2],
  ])
);
