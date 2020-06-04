// You are given a square matrix of size n. Rows are indexed 1 to n from top to 
// bottom and columns are indexed 1 to n form left to right. Matrix consists of 
// only '*' and '.'. You need to check whether matrix is symmetric or not. if it 
// is, check it is symmetric about vertical axis or horizontal axis or both.

// A matrix is said to be symmetric about horizontal axis if 1st row is identical
//  to n-th row, 2nd is identical to (n-1)th row and so on.

// A matrix is said to be symmetric about vertical axis if 1ST column is identical 
// to nth column, 2nd identical to (n-1)th and so on for all columns.

// Input Format

// First line contains t,the number of test cases. First line of each test case 
// contains n the size of matrix. Each of next n lines contain n characters.

// Constraints

// 1<=t<=500

// 1

// Output Format

// Output t lines, answer for each test case. Print "HORIZONTAL" if symmetric 
// about horizontal axis. Print "VERTICAL" if symmetric about vertical axis. Print 
// "BOTH" if symmetric about both axes. print "NO" if it is not symmetric.

// Sample Input 0

// 3
// 4
// *.*.
// .*.*
// *.*.
// .*.*
// 3
// .*.
// *.*
// .*.
// 3
// ..*
// **.
// ..*
// Sample Output 0

// NO
// BOTH
// HORIZONTAL


function processData(input) {
    //Enter your code here
    input = input.split('\n');
    // console.log('input', input);
    
    numberOfTestCases = Number(input[0]);
    // console.log('numberOfTestCases', numberOfTestCases);
    
    var line = 1;
    
    for ( var i = 0; i < numberOfTestCases; i++ ) {
        var matrix = [];
        var n = Number(input[line]);
        line = line + 1;
        
        for ( var j = line; j < line + n; j++ ) {
            matrix.push(input[j].split(''));
        }
        
        line = line + n;
        // console.log('matrix', matrix);
        
        isSymmetric = checkForSymmetry(matrix, n);
        
        if (isSymmetric ) {
            console.log('YES');
        } else {
            console.log('NO');
        }
        
    }
} 

var checkForSymmetry = function(matrix, n) {
    for ( var i = 0; i < n; i++ ) {
        for ( var j = 0; j < n; j++ ) {
            if ( matrix[i][j] !== matrix[i][n-j-1] || matrix[i][j] !== matrix[n-i-1][j]) {
                return false;
            }
        }
    }
    return true;
}
