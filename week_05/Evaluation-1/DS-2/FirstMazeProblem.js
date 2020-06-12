// Sarvagaya is trapped in maze. The Masai command center sent him a string 
// which decodes to come out from the maze. He is initially at (0, 0). String 
// contains L, R, U, D denoting left, right, up and down. In each command he 
// will traverse 1 unit distance in the respective direction.

// For example if he is at (2, 0) and the command is L he will go to (1, 0).

// Input Format

// Input contains a single string.

// Constraints

// Length of string <200

// Output Format

// Print the final point where he came out.

// Sample Input 0

// LLRDDR
// Sample Output 0

// 0 -2

function processData(input) {
    //Enter your code here
    var XCord = 0, YCord = 0, L = -1, R = 1, D = -1, U = 1;
    
    for ( var i = 0; i < input.length; i++ ) {
        
        if ( input[i] === 'L' ) {
            XCord = XCord + L;
            
        } else if ( input[i] === 'R' ) {
            XCord = XCord + R;
            
        } else if ( input[i] === 'D' ) {
            YCord = YCord + D;
            
        } else if ( input[i] === 'U' ) {
            YCord = YCord + U;
        }
        
    }
    
    console.log(XCord, YCord); 
    
}