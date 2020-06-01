// You are provided with N names, your task is to write a code that prints 
// the name along with number of times it is present separated by space. 
// (See sample test case for better understanding)

// Input Format

// First line contains N which is the number of words present.

// Next N lines contain N names (which can be repeating)

// Constraints

// N<100

// Output Format

// Output each name in a sorted manner along with number of times it is present in 
// the list of names.

// Sample Input 0

// 3
// masai
// school
// masai
// Sample Output 0

// masai 2
// school 1


function processData(input) {
    //Enter your code here
    var elementObject = {};
    
    input = input.split('\n');
    // console.log('input', input);
    
    numberOfElements = Number(input[0]);
    // console.log('numberOfElements', numberOfElements);
    
    input.shift();
    // console.log('input.shift', input);
    
    input.sort();
    // console.log('input.sort', input);
    
    
    for ( var i = 0; i < numberOfElements; i++ ) {
        
        if ( elementObject[ input[ i ] ] ) {
            elementObject[ input [ i ] ] = elementObject[ input [ i ] ] + 1 ;
        } else {
            elementObject[ input [ i ] ] = 1;
        }
    }
    
    // console.log('elementObject', elementObject);
    
    for ( var key in elementObject ) {
        console.log( key, elementObject[key] );
    }
    
    
    
}