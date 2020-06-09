// Given a string, find the length of the smallest sub-string consisting of maximum 
// distinct characters. 

// Also note that the output can have reprating characters. 

// Suppose string is aaabbbcdcd, but the substring "abbbcd" contains all the distinct 
// characters present in the string (i.e. "a", "b", "c", "d")
// Input Format

// First line of input contains the string

// Constraints

// Length of string < 500

// Output Format

// Print the number which is the length of the smallest sub-string consisting of maximum 
// distinct characters

// Sample Input 0

// zoomsessionmooz
// Sample Output 0

// 10


function processData(input) {
    //Enter your code here
    // console.log("input", input);
    
    
    var uniqueArray = removeDuplicates(input);
    // console.log("uniqueArray", uniqueArray);
    
    var uniqueArrayLength = uniqueArray.length;
    // console.log("uniqueArrayLength", uniqueArrayLength);
    
    var minimum = Number.MAX_SAFE_INTEGER;
    // console.log("minimum", minimum);
    
    for ( var i = 0; i < input.length; i++ ) {
        for ( var j = i; j <= input.length; j++ ) {
            var SubString = input.substring(i, j);
            // console.log("SubString", SubString);
            
            if ( SubString.length >= uniqueArrayLength ) {
                // console.log("SubString", SubString);
                var equalOrlargerLengthSubString = removeDuplicates(SubString);
                // console.log("equalOrlargerLengthSubString", equalOrlargerLengthSubString);
                
                if ( equalOrlargerLengthSubString.length === uniqueArrayLength ) {
                    // console.log("equalOrlargerLengthSubString", equalOrlargerLengthSubString,
                    //  SubString, SubString.length);
                    
                    if ( SubString.length <  minimum ) {
                        minimum = SubString.length;
                        var answer = SubString;
                    }
            }
            }
        }
    }
    // console.log(answer, minimum);
    console.log(minimum);    
} 

var removeDuplicates = function ( input ) {
    var distinctObject = {};
    
    for ( var i = 0; i < input.length; i++ ) {
        distinctObject[input[i]] = input[i];
    }
    
    // console.log("distinctObject", distinctObject);
    
    var distinctArray = Object.keys(distinctObject);
    // console.log("distinctArray", distinctArray);
    
    return distinctArray;
}
