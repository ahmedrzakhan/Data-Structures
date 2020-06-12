// You are provided a string S. Your task is to print a string which also contains
//  the number of times that character is repeated. (Read explanation of test case 
// for better understanding)

// Input Format

// First and the only line contains the string S.

// Constraints

// Length of S is always lesser than 100

// Output Format

// Output one string.

// Read sample test case and explanation for better understanding.

// Sample Input 0

// aaabbbbcc
// Sample Output 0

// a3b4c2
// Explanation 0

// In the given string, character 'a' is repeated 3 times.=>a3

// Character 'b' is repeated 4 times =>b4

// Character 'c' is repeated 2 times =>c2

// So, you have to print "a3b4c2" (without quotes).
// Sample Input 1

// aaabbbcccaaa
// Sample Output 1

// a3b3c3a3

function processData(input) {
    //Enter your code here
    var result = "";
    var count = 1;
    
    for ( var i = 0; i < input.length; i++ ) {
        if ( input[i] === input[i + 1] ) {
            count = count + 1;
        } else {
            result = result + input[i] + count;
            count = 1;
        }        
    }
    
    console.log(result)    
} 