// You are given an array of n rows, m columns which contains positive integers and 
// product p You need to find occurrences of the product of three consecutive numbers
//  (i.e x,y, and z )whose product is equal to given p appear horizontally, vertically
//   and diagonally in the given matrix.

// image

// Input Format

// First line: Three integers n, m and p, where n denotes the number of rows, m denotes 
// the number of columns in the matrix and p is the product.

// Next line :Each line contains m characters which contains positive integers only.

// Constraints

// 1< = n,m < 10

// 1<= p <=100

// Output Format

// Print the number of times the product p appears in the matrix

// Sample Input 0

// 3 3 6
// 3 2 1
// 2 2 2
// 1 5 1
// Sample Output 0

// 3
// Explanation 0

// The product p 6 presents 3 times in the matrix(1 horizontal+1 vertical + 1 diagonal)


function processData(input) {
    //Enter your code here
    input = input.split('\n');
    var [rows, columns, product] = input[0].split(' ').map(Number);
    // console.log("rows, columns, product", rows, columns, product);

    var matrix = [];

    for (var i = 1; i <= rows; i++) {
        matrix.push(input[i].split(' ').map(Number));
    }

    // console.log("matrix", matrix);

    var count = 0;

    for (var i = 0; i < rows; i++) {
        for (var j = 0; j < columns; j++) {

            if (columns - j >= 3) {
                if (matrix[i][j] * matrix[i][j + 1] * matrix[i][j + 2] === product) {
                    count = count + 1;
                }
            }

            if (rows - i >= 3) {
                if (matrix[i][j] * matrix[i + 1][j] * matrix[i + 2][j] === product) {
                    count = count + 1;
                }
            }

            if (columns - j >= 3 && rows - i >= 3) {
                if (matrix[i][j] * matrix[i + 1][j + 1] * matrix[i + 2][j + 2] === product) {
                    count = count + 1;
                }
            }

            if (columns - j >= 3 && i >= 3 - 1) {
                if (matrix[i][j] * matrix[i - 1][j + 1] * matrix[i - 2][j + 2] === product) {
                    count = count + 1;
                }
            }
        }
    }

    console.log(count);

}