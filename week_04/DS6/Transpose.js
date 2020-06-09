// The transpose of a matrix is an operator which flips a matrix over its diagonal,
//  that is it switches the row and column of the matrix by producing another matrix.
//   See sample test case for better understanding

// So, given an array of n rows and m columns, generate the transpose of the matrix.

// Input Format

// First line contains two integers n and m

// Next n lines contain m integers which represents each row of 2d array

// Constraints

// n,m <= 500

// Output Format

// Print the transposed array

// Sample Input 0

// 5 4
// 0 0 0 0
// 1 1 1 1
// 2 2 2 2
// 3 3 3 3
// 4 4 4 4
// Sample Output 0

// 0 1 2 3 4 
// 0 1 2 3 4 
// 0 1 2 3 4 
// 0 1 2 3 4 

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    // console.log("input", input);
    
    var [ numberOfRows, numberOfColumns ] = input[0].split(' ').map(Number);
    // console.log("numberOfRows, numberOfColumns", numberOfRows, numberOfColumns);
    
    var matrix = [];
    for ( var i = 1; i <= numberOfRows; i++ ) {
        matrix.push(input[i].split(' ').map(Number));
    }  
    // console.log(matrix);

    var result = transpose(matrix,  numberOfRows, numberOfColumns);
} 

var transpose = function(matrix, numberOfRows, numberOfColumns ) {
      
    for ( var j = 0; j < numberOfColumns; j++ ) {
        var row = "";
        
        for ( var i = 0; i < numberOfRows; i++ ) {
            row  = row + matrix[i][j] + " ";
            console.log("i, j", i, j);
        }   
    console.log(row);
    }   
}

processData('5 4\n0 0 0 0\n1 1 1 1\n2 2 2 2\n3 3 3 3\n4 4 4 4')