// You have to write code that draws a Snake for you according to the following rules:

// A snake is a pattern on a n by m table. Denote c-th cell of r-th row as (r, c).
//  The tail of the snake is located at (1, 1), then it's body extends to (1, m), 
// then goes down 2 rows to (3, m), then goes left to (3, 1) and so on.

// The empty cells should be represented as dot characters ('.') and the snake cells 
// should be filled with number signs ('#').

// Consider sample tests in order to understand the snake pattern.

// Input Format

// The only line contains two integers: n and m.

// n is an odd number.
// Constraints

// 3 ≤ n,m ≤ 50
// Output Format

// Output n lines. Each line should contain a string consisting of m characters. Do 
// not output spaces.
// Sample Input 0

// 3 3
// Sample Output 0

// ###
// ..#
// ###
// Sample Input 1

// 5 3
// Sample Output 1

// ###
// ..#
// ###
// #..
// ###
// Sample Input 2

// 9 9
// Sample Output 2

// #########
// ........#
// #########
// #........
// #########
// ........#
// #########
// #........
// #########


function processData(input) {
    //Enter your code here
 
    var [rows, columns] = input.split(' ').map(Number);
    // console.log('rows, columns', rows, columns);
    
    var dottedLines = 0;
    var patternArray = [];
    
    for ( var i = 0; i < rows; i++ ) {
        for ( var j = 0; j < columns; j++ ) {
            if ( i % 2 === 0 ) {
                patternArray[j] = '#'
            } else {
                patternArray[j] = '.'
                
                if ( dottedLines % 2 === 0 ) {
                    patternArray[columns - 1] = '#';
                } else {
                    patternArray[0] = '#';
                
                }
            }
        }
        
        if ( i % 2 === 1 ) {
            dottedLines = dottedLines + 1;
        } 
        console.log(patternArray.join(''));
        
    }
} 