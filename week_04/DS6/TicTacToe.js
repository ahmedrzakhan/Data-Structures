// You are given a 3*3 matrix (2 dimensional array) that represents the final 
// situation of a Tic Tac Toe. 

// You task is to write a program that finds out the winner in case the match ended
//  in a win. If the winner is 'x', print 'x'(without quotes).

// If the winner is 'o', print 'o' (without quotes)

// In case the match ended in a tie, print "Tie" (without quotes)
// Input Format

// Input contains 3 lines where each line has 3 space separated characters which 
// represents final status of tic tac toe

// Constraints

// Input contains either of the 2 alphabets: 'x' and 'o'

// Output Format

// Print Tie/x/o depending on the end result of game

// Sample Input 0

// x o x
// o x x
// o o o
// Sample Output 0

// o


function processData(input) {
    //Enter your code here
    input = input.split('\n')
    // console.log(input);
    
    var matrix = [];
    for ( var i = 0; i < 3; i++ ) {
        matrix.push(input[i].split(' '));
    }
    
    // console.log(matrix);
    
    winner = findWinner( matrix )
} 

var findWinner = function( matrix ) {
    
            if ( matrix[0][0] === matrix[0][1] && matrix[0][1] === matrix[0][2] ) {
                console.log(matrix[0][0]);
                
            } else if ( matrix[1][0] === matrix[1][1] && matrix[1][1] === matrix[1][2] ) {
                console.log(matrix[1][0]);
                
            } else if ( matrix[2][0] === matrix[2][1] && matrix[2][1] === matrix[2][2] ) {
                console.log(matrix[2][0]);
                
            } else if ( matrix[0][0] === matrix[1][0] && matrix[1][0] === matrix[2][0] ) {
                console.log(matrix[0][0]);
                
            }  else if ( matrix[0][1] === matrix[1][1] && matrix[1][1] === matrix[2][1] ) {
                console.log(matrix[0][1]);
                
            } else if ( matrix[0][2] === matrix[1][2] && matrix[2][2] === matrix[2][2] ) {
                console.log(matrix[0][2]);
                
            } else if ( matrix[0][0] === matrix[1][1] && matrix[1][1] === matrix[2][2] ) {
                console.log(matrix[0][0]);
                
            } else if ( matrix[0][2] === matrix[1][1] && matrix[1][1] === matrix[2][0] ) {
                console.log(matrix[0][2]);
            }
}