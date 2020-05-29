// Joey has an array A consists of N integers.

// He can only do one move, he can choose two indices 1≤i,j≤n such that i≠j and 
// set A[i]=A[j] (setting the value of ith value of A to jth value of A).

// He can perform such moves any number of times (possibly, zero). He can choose different
//  indices in different operations, to make the sum of all the numbers odd.

// We need to Help Joey in finding out for given arrays if it is possible to make the sum 
// odd by doing only the move mentioned above.

// If it is possible ouput 'YES' else output 'NO'

// You have to answer T independent test cases.

// Input Format

// Number of test cases
// Number of values in array
// space seperated values for array
// Constraints

// T <= 1000
// N <= 100000
// Output Format

// YES or NO for all the test cases

// Sample Input 0

// 2
// 5
// 1 2 3 4 5
// 5
// 2 2 2 2 2
// Sample Output 0

// YES
// NO



function processData(input) {
    //Enter your code here
    input = input.split('\n');
    
    numberOfTestCases = Number(input[0]);
    // console.log('numberOfTestCases', numberOfTestCases);
    
    var line = 1;
    for ( var i = 0; i < numberOfTestCases; i++ ) {
        
        var numberOfValues = Number(input[line]);
        line++;
        
        // console.log('line, n', line, n);

        var arr = input[line].split(' ').map(Number);
        line++;
        
        // console.log('arr', arr);
        
        var result = makeOdd ( arr, numberOfValues );
        
    }

} 

var makeOdd = function( arr, numberOfValues ) {
    // console.log('arr, numberOfValues', arr, numberOfValues);
    
    var countOfEven = 0, countOfOdd = 0;
    
    for ( var i = 0; i < numberOfValues; i++ ) {
        if ( arr[i] % 2 === 1 ) {
            countOfOdd = countOfOdd + 1;
        } else {
            countOfEven = countOfEven + 1;
        }
    }
    
    // console.log('countOfOdd, countOfEven', countOfOdd, countOfEven);
    
    if ( countOfEven === numberOfValues || ( countOfOdd === numberOfValues && numberOfValues % 2 === 0 )) {
        console.log("NO");
    } else {
        console.log("YES");
    }
    
}