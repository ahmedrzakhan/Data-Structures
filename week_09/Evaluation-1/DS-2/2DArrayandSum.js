// You are given an array of n rows and m columns which contains positive integers and sum s

// You need to find occurrences of the sum of three consecutive numbers (i.e x,y, and z )
// whose sum is equal to s appear horizontally, vertically and diagonally in the given matrix.

// image

// Input Format

// First line: Three integers n, m and s, where n denotes the number of rows, m denotes the 
// number of columns in the matrix and s is the sum.

// Next n lines: Each line contains m characters which contains positive integers only.

// Constraints

// 1< = n,m < 10

// 1<= s <=50

// Output Format

// Print the number of times the sum s appears in the matrix

// Sample Input 0

// 3 3 6
// 3 2 1
// 2 2 2
// 1 5 1
// Sample Output 0

// 4
// Explanation 0

// here s is 6 presents 4 times( 2 horizontal + 1 Vertical + 1 diagonal)

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    // console.log("input", input);

    var [numberOfRows, numberOfColumns, sum] = input[0].split(' ').map(Number);
    // console.log("numberOfRows, numberOfColumns, sum", numberOfRows, numberOfColumns, sum);

    var matrix = [];
    var count = 0

    for (var i = 1; i <= numberOfRows; i++) {
        matrix.push(input[i].split(' ').map(Number));
    }
    // console.log("matrix", matrix);

    for (var i = 0; i < numberOfRows; i++) {
        for (var j = 0; j < numberOfColumns; j++) {
            // // console.log(i, j);
            if (numberOfColumns - j >= 3) {
                // console.log("row, i, j", i, j, i, j+1, i, j+2)

                if (matrix[i][j] + matrix[i][j + 1] + matrix[i][j + 2] === sum) {
                    // console.log("row", matrix[i][j], matrix[i][j+1], matrix[i][j+2])
                    count = count + 1;
                }
            }

            if (numberOfRows - i >= 3) {
                // console.log("col", i, j, i+1 ,j, i+2, j);

                if (matrix[i][j] + matrix[i + 1][j] + matrix[i + 2][j] === sum) {
                    // console.log("col", matrix[i][j], matrix[i+1][j], matrix[i+2][j])
                    count = count + 1;
                }
            }

            if (numberOfColumns - j >= 3 && numberOfRows - i >= 3) {
                // console.log("diag down", i, j, i+1, j+1, i+2, j+2);

                if (matrix[i][j] + matrix[i + 1][j + 1] + matrix[i + 2][j + 2] === sum) {
                    // console.log("diag down", matrix[i][j], matrix[i+1][j+1], matrix[i+2][j+2])
                    count = count + 1;
                }
            }

            if (numberOfColumns - j >= 3 && i >= 3 - 1) {
                // console.log("diag up", i, j, i-1, j+1, i-2, j+2);

                if (matrix[i][j] + matrix[i - 1][j + 1] + matrix[i - 2][j + 2] === sum) {
                    // console.log("diag down", matrix[i][j], matrix[i-1][j+1], matrix[i-2][j+2])
                    count = count + 1;
                }
            }

        }
    }

    console.log(count);

}