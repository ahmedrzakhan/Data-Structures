// You are provided 3 integers: left, right and k. Your task is to write 
// a program that finds out count of all such numbers between left and right (
//     both inclusive) which are divided by k.

// Input Format

// First line contains 3 space separated integers which are left, right and k 
// respectively.

// Constraints

// l,r,k<10000

// Output Format

// Output the count of such numbers

// Sample Input 0

// 1 10 1
// Sample Output 0

// 10

function processData(input) {
    //Enter your code here
    
    var [ left, right, k ] = input.split(' ').map(Number);
    
    // console.log(left, right, k );
    
    var count = 0;
    
    for ( var i = left; i <= right; i++ ) {
        // console.log("i", i);
        
        if ( i % k === 0 ) {
            count = count + 1;
        }
    }
    
    console.log( count);
    
} 
