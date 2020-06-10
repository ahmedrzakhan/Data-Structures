// You are provided a sentence S, your task is to write a program that reverses
//  the order/sequence in which words are present in the sentence keeping the 
// case of each character preserved (upper case character should remain upper 
// and lower case character as lower case). (Refer to the sample test case for
//  better understanding)

// *** DO NOT ANY BUILT-IN FUNCTION FOR REVERSING A STRING ***
// Input Format

// You are provided a sentence having one or more than one word.

// Constraints

// At least one word is present in the string

// Output Format

// Output the sentence by reversing the sequence of words

// Sample Input 0

// A Transformation in education
// Sample Output 0

// education in Transformation A
// Explanation 0

// The sentence has been reversed in the sense that the sequence in which the words 
// were present in the initial sentence is reversed.

// Also, there is no change in the case of characters present in the sentence.


function processData(input) {
    //Enter your code here
    // console.log("input", input);
    
    var splitString = input.split(' ');
    // console.log("splitString", splitString);
    
    var lengthOfSplitString = splitString.length;
    
    for ( var i = 0; i < lengthOfSplitString / 2; i++ ) {
        temp = splitString[ lengthOfSplitString - 1 - i];
        splitString[lengthOfSplitString - 1 - i] = splitString[i] ;
        splitString[i] = temp;
        // console.log(i)
        
    }
    
    // console.log("splitString", splitString);
    
    console.log(splitString.join(' '));
    
} 