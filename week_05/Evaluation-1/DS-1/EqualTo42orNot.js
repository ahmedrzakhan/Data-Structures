// You are given an array of N integers. Output "Yes" if 42 is present in array, else print "No".

// Input Format

// First line contains number of integers N present in the array.

// Second line contains N space separated integers.

// Constraints

// N<100

// Output Format

// Output Yes/No based on condition mentioned above.

// Sample Input 0

// 5
// 3 7 0 9 8
// Sample Output 0

// No

function processData(input) {
    var y = 0, n = 0; 
    //Enter your code here
    // console.log('input', input);
    // console.log('typeof input', typeof input);
    
    array1 = input.split('\n');
    // console.log('array1', array1);
    
    numberOfIntegers = Number(array1[0]);
    // console.log('numberOfIntegers', numberOfIntegers);
    
    IndividualIntegers = array1[1].split(' ').map(Number);
    // console.log('IndividualIntegers', IndividualIntegers);
    
    for ( var i = 0; i < numberOfIntegers; i++) {
        if ( IndividualIntegers[i] === 42 ) {
            y = y + 1;
        } else {
            n = n + 1;
        }
    }
    
    if ( y >= 1 ) {
        console.log('Yes');
    } else {
        console.log('No');
    }
} 
