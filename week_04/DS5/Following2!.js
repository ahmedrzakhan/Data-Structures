// You are given N integers, your task is to write a program that finds the integer 
// present after 2 in the sequence of numbers given. In case 2 is not present or 2 
// is the last element, print -1.

// Input Format

// First line of the input contains N

// Second line of the input contains N space separated integers.

// Constraints

// N<10000

// Output Format

// Output number present after 2.

// In case there's no number present after 2, print -1

// Sample Input 0

// 5
// 3 4 2 0 1
// Sample Output 0

// 0


function processData(input) {
    //Enter your code here
    // console.log('input', input);
    // console.log('typeof input', typeof input);
    
    array1 = input.split('\n');
    // console.log('array1', array1);
    // console.log('typeof array1', typeof array1);
    

    
    numberOfIntegers = Number(array1[0]);
    // console.log('numberOfIntegers', numberOfIntegers);
    // console.log('typeof numberOfIntegers', typeof numberOfIntegers);
    
    individualIntegers = array1[1].split(' ');
    // console.log('individualIntegers', individualIntegers);
    
    lengthOfIndividualIntegers = individualIntegers.length;
    // console.log('lengthOfIndividualIntegers', lengthOfIndividualIntegers);
    
    for ( index = 0; index < lengthOfIndividualIntegers; index++) {
        if ( individualIntegers[index] === '2' && individualIntegers[index + 1] === undefined) {
    console.log(-1);
} else if ( individualIntegers[index] === '2') {
              console.log( Number(individualIntegers[index+1]));   
 
        }
    
} 
}