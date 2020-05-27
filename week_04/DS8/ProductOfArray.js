// You are given an array of N positive integers. Write a program to output the product
//  of all the elements present in the array.

// Input Format

// First line contains N.

// Second line contains N space separated integers

// Constraints

// N<100

// Output Format

// Output one number which is the product of all elements.

// Sample Input 0

// 5
// 3 5 2 9 4
// Sample Output 0

// 1080



function processData(input) {
    //Enter your code here
    // console.log('input', input);
    // console.log('typeof input', typeof input);
    
    array1 = input.split('\n');
    // console.log('array1', array1);
    
    totalElements = Number(array1[0]);
    // console.log('totalElements', totalElements);
    // console.log('typeof totalElements', typeof totalElements);
    
    firstArray = array1[1];
    // console.log('firstArray', firstArray);
    // console.log('typeof firstArray', typeof firstArray);
    
    secondArray = firstArray.split(' ').map(function(element) {
        return Number(element);
    });
    // console.log('secondArray', secondArray);
    // console.log('typeof secondArray', typeof secondArray);
    // console.log('secondArray[0]', secondArray[0]);
    // console.log('typeof secondArray[0]', typeof secondArray[0]);
    
    product = secondArray.reduce(function(accumulator, element) {
       return accumulator * element 
    });
    
    console.log(product);
    
    
    
    
} 
