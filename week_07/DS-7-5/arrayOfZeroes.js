// You have an array of non-negative integers. You can perform one operation on it in
//  which you can choose i-th index with 0 <= i < n and subtract 1 from both i-th and 
// (i+1) th index of array.

// Your task is to write a program that can comment if it is possible to get an array 
// of all zeros after several operations.

// Input Format

// The first line of test case is a number N. (0 < N <= 10000) The next line is N
//  non-negative integers, 0 <= a_i <= 109
// Constraints

// 0 < N <= 10000
// Output Format

// If it can be modified into all zeros with several operations output “YES” in a 
// single line, otherwise output “NO” instead.
// Sample Input 0

// 2
// 1 2
// Sample Output 0

// NO
// Sample Input 1

// 2
// 2 2
// Sample Output 1

// YES

function processData(input) {
    //Enter your code here
    input = input.split('\n');
    // console.log('input', input);
    
    numberOfElements = Number(input[0]);
    // console.log('numberOfElements', numberOfElements);
    
    givenArray = input[1].split(' ').map(Number);
    // console.log('givenArray', givenArray);
    
    for ( var i = 0; i < numberOfElements - 1; i++ ) {
        givenArray[i + 1] = givenArray[i + 1] - givenArray[i];
        givenArray[i] = 0;
    }
    
    if ( givenArray[numberOfElements - 1] === 0 ) {
        console.log("YES");
    } else {
        console.log("NO");
    }  
    
} 