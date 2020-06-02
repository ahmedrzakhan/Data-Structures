// You are given 2 arrays of N integers. Your task is to write a program that 
// finds the one integer which is common in both arrays.

// Note: There is always one integer common in both arrays.

// Input Format

// First line of input contains N

// Second line contains N space separated integers making the first array

// Third line contains N space separated integers making the second array

// Constraints

// N<1000

// Output Format

// Output that one integer which is common in both arrays

// Sample Input 0

// 3
// 4 5 7
// 9 2 5
// Sample Output 0

// 5


function processData(input) {
    //Enter your code here
    input = input.split('\n')
    // console.log('input', input);
    
    numberOfIntegers = Number(input[0]);
    // console.log('numberOfIntegers', numberOfIntegers);
    
    firstArray = input[1].split(' ').map(Number);
    // console.log('firstArray', firstArray);
    
    secondArray = input[2].split(' ').map(Number);
    // console.log('secondArray', secondArray);
    
    for ( var i = 0; i < numberOfIntegers; i++ ) {
        for ( var j = 0; j < numberOfIntegers; j++ ) {
           if ( firstArray[i] === secondArray[j] ) {
               console.log(firstArray[i]);
           } 
        }
    }
} 