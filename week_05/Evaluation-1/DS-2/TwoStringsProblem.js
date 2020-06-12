// A substring is a contiguous sequence of characters within a string. You 
// are given two strings: S1 and S2.

// Print "Yes" if S2 is a substring of S1, else print "No"

// Input Format

// First line contains S1

// Second line contains S2

// Constraints

// Length of both strings < 100

// Output Format

// Output string based on S1 and S2

// Sample Input 0

// masai
// sai
// Sample Output 0

// Yes

function processData(input) {
    //Enter your code here
    
    input = input.split('\n');
    
    var firstArray = input[0].split('');
    var secondArray = input[1].split('');
    var count = 0;
    
    // console.log(firstArray, secondArray);
    
    secondArray.map(function (element) {
        var check = firstArray.includes(element);
        
        if ( check ) {
            count = count + 1;
        }
    });
    
    // console.log(count);
    
    if ( count === secondArray.length ) {
        console.log("Yes");
    } else {
        console.log("No")
    }
    
} 