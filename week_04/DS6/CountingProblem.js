// Given a string S, count the number of times each character is present in 
// the string.

// Print the character and number of times that character is present in the string
//  separated by a space.

// Each character and the number of times it is present should be written in a new 
// line The order of characters should be in Lexicographical order (See sample test 
//     case for better understanding)

// Input Format

// First and the only line contains the string S

// String S contains only lower case alphabets

// Constraints

// Length of string < 100

// Output Format

// Print the character and number of times that character is present in the string 
// separated by a space.

// Each character and the number of times it is present should be written in a new line

// Sample Input 0

// masaischool
// Sample Output 0

// a 2
// c 1
// h 1
// i 1
// l 1
// m 1
// o 2
// s 2    
    
function processData(input) {
    //Enter your code here
    input = input.split('').sort().join('');
    
    var stringObject = {};
    
    for ( var i = 0; i < input.length; i++ ) {
        if ( stringObject[input[i]] ) {
            stringObject[input[i]]++
        } else {
            stringObject[input[i]] = 1
        }
    }
    
    for ( key in stringObject ) {
        console.log(key + " " +stringObject[key]);
    }
    
} 