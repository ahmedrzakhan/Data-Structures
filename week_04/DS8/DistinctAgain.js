// You are given an array of N elements. Your task is to write a program that 
// calculates the sum of all distinct elements present in the array.

// Input Format

// First line of input contains N

// Second line of input contains N space separated integers.

// Constraints

// N<10000

// Output Format

// Output sum of only distinct elements

// Sample Input 0

// 5
// 2 2 2 1 1
// Sample Output 0

// 3
// Explanation 0

// There are 5 elements present in the array but only 2 distinct elements (2 and 1)

// Hence, sum is 3

function processData(input) {
    var distinctElements = [];
    //Enter your code here
    // console.log('input', input);
    // console.log('typeof input', typeof input);
    
    array1 = input.split('\n');
    // console.log('firstArray', array1);
    // console.log('typeof firstArray', typeof array1);
    
    totalElements = Number(array1[0]);
    
//     console.log('totalElements', totalElements);
//     console.log('typeof totalElements', typeof totalElements);
    
    elements = array1[1].split(' ').map(Number);
//     console.log('elements', elements);
//     console.log('typeof elements', typeof elements);
//     console.log('elements[0]', elements[0]);
//     console.log('typeof elements[0]', typeof elements[0]);
    
    
    for ( var index = 0; index < totalElements; index++ ) {
        valueSeen = elements[ index ];

           if ( valueSeen === elements[ index + 1 ]) {
               // console.log(valueSeen);
           } else {
               distinctElements.push( elements[ index ] );
           }
        
    }
        console.log('distinctElements', distinctElements)

    sum = distinctElements.reduce(function ( acc, element) {
        return acc + element
    }, 0);
    
    console.log(sum);
    } 


processData('5\n2 2 2 2 1 1');
