// You are given an array of N integers. Find the total count of negative elements present in the array.

// Input Format

// First line contains N integers

// Second line contains N space separated integers which constitute the array.

// Constraints

// N < 100

// Output Format

// Output the number of negative integers present in the array

// Sample Input 0

// 5
// -3 0 -5 9 8
// Sample Output 0

// 2




function processData(input) {
    //Enter your code here
    cnt = 0;
    // number_of_integers = input
   // console.log('input', input);
    array1 = input.split('\n');
    
    lengthOfArray = array1[0];
    // console.log('lengthOfArray', lengthOfArray);
    
    elements = array1[1].split(' ');
    
    for ( i = 0; i < lengthOfArray; i++) {
        if ( Number(elements[i]) < 0) {
            cnt += 1
        }
    }
    
    console.log(cnt);
    
} 