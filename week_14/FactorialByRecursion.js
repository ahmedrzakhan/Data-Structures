// The factorial of a positive integer N is the product of all positive integers less 
// than or equal to n:

// Given a number N, your task is to write a program that calculates factorial of N.

// Input Format

// First and the only line contains N

// Constraints

// N<15

// Output Format

// Output the factorial value of N

// Sample Input 0

// 5
// Sample Output 0

// 120
// Explanation 0

// Factorial of 5 = 5*4*3*2*1 = 120

function processData(input) {
    //Enter your code here
    let n = Number(input);
    
    let ans = 1;
    
    for ( let i = n; i > 0; i-- ) {
        ans = ans * i;
    // console.log(ans);
        
    }
    console.log(ans);
    
} 